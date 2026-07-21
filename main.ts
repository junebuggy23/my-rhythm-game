game.setLife(6)
let beat1 = game.createSprite(0, 0)
let beat2 = game.createSprite(4, 0)
game.setScore(0)
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        beat1.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat1.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(200)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat1.set(LedSpriteProperty.Y, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 3; index++) {
        beat2.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(200)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat2.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(200)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat2.set(LedSpriteProperty.Y, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 3; index++) {
        beat1.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat1.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(100)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat1.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        beat2.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat2.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(100)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat2.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        beat1.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat1.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(100)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat1.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
    for (let index = 0; index < 3; index++) {
        beat2.change(LedSpriteProperty.Y, 1)
        music.play(music.createSoundExpression(WaveShape.Sine, 500, 500, 255, 0, 50, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.play(music.createSoundExpression(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        beat2.set(LedSpriteProperty.Y, 0)
        game.addScore(1)
        basic.pause(100)
    } else {
        music.play(music.createSoundExpression(WaveShape.Triangle, 300, 200, 255, 0, 75, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
        game.removeLife(1)
        beat2.set(LedSpriteProperty.Y, 0)
        basic.pause(100)
    }
})
