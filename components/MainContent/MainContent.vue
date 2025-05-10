<template>
    <div class="flex flex-col w-full h-full">
        <slot class="flex-1" name="header" />

        <div class="flex-1 w-full bg-gray-50 h-max">
            <div class="w-full h-full max-w-screen-xl p-5 mx-auto">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>