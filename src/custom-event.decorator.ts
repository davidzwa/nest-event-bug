import { SetMetadata } from "@nestjs/common";
import { EVENT_LISTENER_METADATA } from "@nestjs/event-emitter/dist/constants";
import { OnEventOptions } from "@nestjs/event-emitter/dist/interfaces";
import { OnEventMetadata } from "@nestjs/event-emitter";

/**
 * Event listener decorator.
 * Subscribes to events based on the specified name(s).
 *
 * @param id
 * @param options
 */
export const OnCustomEvent = (
  options?: OnEventOptions
): MethodDecorator =>
  SetMetadata(EVENT_LISTENER_METADATA, 
    {
      event: 'custom-event',
      options
    } as OnEventMetadata);