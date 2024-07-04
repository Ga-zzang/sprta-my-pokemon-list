"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("/api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto ">
      {pokemons.length === 0 ? (
        <p>로딩중 입니다...</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className="border p-4 rounded-lg ">
              <Link href={`/pokemon/${pokemon.id}`}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.korean_name}
                  width={96}
                  height={96}
                />
                <p>{pokemon.korean_name}</p>
                <p>도감번호: {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
