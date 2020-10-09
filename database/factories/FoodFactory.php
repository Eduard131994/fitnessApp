<?php

namespace Database\Factories;

use App\Models\Food;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Food::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'calories' => $this->faker->randomFloat(2,1,400),
            'carbs' => $this->faker->randomFloat(2,1,40),
            'protein' => $this->faker->randomFloat(2,1,40),
            'fat' => $this->faker->randomFloat(2,1,40),
        ];
    }
}
