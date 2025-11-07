// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugOspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dummy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#dumy DebugOspf#dumy}
  */
  readonly dumy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#id DebugOspf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#all DebugOspf#all}
  */
  readonly all?: DebugOspfAll;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#bfd DebugOspf#bfd}
  */
  readonly bfd?: DebugOspfBfd;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#events DebugOspf#events}
  */
  readonly events?: DebugOspfEvents;
  /**
  * ifsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ifsm DebugOspf#ifsm}
  */
  readonly ifsm?: DebugOspfIfsm;
  /**
  * lsa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#lsa DebugOspf#lsa}
  */
  readonly lsa?: DebugOspfLsa;
  /**
  * nfsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#nfsm DebugOspf#nfsm}
  */
  readonly nfsm?: DebugOspfNfsm;
  /**
  * nsm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#nsm DebugOspf#nsm}
  */
  readonly nsm?: DebugOspfNsm;
  /**
  * packet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#packet DebugOspf#packet}
  */
  readonly packet?: DebugOspfPacket;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#route DebugOspf#route}
  */
  readonly route?: DebugOspfRoute;
}
export interface DebugOspfAll {
  /**
  * Dummy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#dumy DebugOspf#dumy}
  */
  readonly dumy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfAllToTerraform(struct?: DebugOspfAllOutputReference | DebugOspfAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dumy: cdktf.numberToTerraform(struct!.dumy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfAllToHclTerraform(struct?: DebugOspfAllOutputReference | DebugOspfAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dumy: {
      value: cdktf.numberToHclTerraform(struct!.dumy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dumy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumy = this._dumy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dumy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dumy = value.dumy;
      this._uuid = value.uuid;
    }
  }

  // dumy - computed: false, optional: true, required: false
  private _dumy?: number; 
  public get dumy() {
    return this.getNumberAttribute('dumy');
  }
  public set dumy(value: number) {
    this._dumy = value;
  }
  public resetDumy() {
    this._dumy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumyInput() {
    return this._dumy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfBfd {
  /**
  * Dummy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#dumy DebugOspf#dumy}
  */
  readonly dumy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfBfdToTerraform(struct?: DebugOspfBfdOutputReference | DebugOspfBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dumy: cdktf.numberToTerraform(struct!.dumy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfBfdToHclTerraform(struct?: DebugOspfBfdOutputReference | DebugOspfBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dumy: {
      value: cdktf.numberToHclTerraform(struct!.dumy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dumy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumy = this._dumy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dumy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dumy = value.dumy;
      this._uuid = value.uuid;
    }
  }

  // dumy - computed: false, optional: true, required: false
  private _dumy?: number; 
  public get dumy() {
    return this.getNumberAttribute('dumy');
  }
  public set dumy(value: number) {
    this._dumy = value;
  }
  public resetDumy() {
    this._dumy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumyInput() {
    return this._dumy;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfEvents {
  /**
  * OSPF ABR events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#abr DebugOspf#abr}
  */
  readonly abr?: number;
  /**
  * OSPF ASBR events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#asbr DebugOspf#asbr}
  */
  readonly asbr?: number;
  /**
  * OS events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#os DebugOspf#os}
  */
  readonly os?: number;
  /**
  * Other router events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#router DebugOspf#router}
  */
  readonly router?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual-Link event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#vlink DebugOspf#vlink}
  */
  readonly vlink?: number;
}

export function debugOspfEventsToTerraform(struct?: DebugOspfEventsOutputReference | DebugOspfEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: cdktf.numberToTerraform(struct!.abr),
    asbr: cdktf.numberToTerraform(struct!.asbr),
    os: cdktf.numberToTerraform(struct!.os),
    router: cdktf.numberToTerraform(struct!.router),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vlink: cdktf.numberToTerraform(struct!.vlink),
  }
}


export function debugOspfEventsToHclTerraform(struct?: DebugOspfEventsOutputReference | DebugOspfEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: cdktf.numberToHclTerraform(struct!.abr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asbr: {
      value: cdktf.numberToHclTerraform(struct!.asbr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    os: {
      value: cdktf.numberToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router: {
      value: cdktf.numberToHclTerraform(struct!.router),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlink: {
      value: cdktf.numberToHclTerraform(struct!.vlink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfEventsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr;
    }
    if (this._asbr !== undefined) {
      hasAnyValues = true;
      internalValueResult.asbr = this._asbr;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._router !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlink = this._vlink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._abr = undefined;
      this._asbr = undefined;
      this._os = undefined;
      this._router = undefined;
      this._uuid = undefined;
      this._vlink = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._abr = value.abr;
      this._asbr = value.asbr;
      this._os = value.os;
      this._router = value.router;
      this._uuid = value.uuid;
      this._vlink = value.vlink;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr?: number; 
  public get abr() {
    return this.getNumberAttribute('abr');
  }
  public set abr(value: number) {
    this._abr = value;
  }
  public resetAbr() {
    this._abr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr;
  }

  // asbr - computed: false, optional: true, required: false
  private _asbr?: number; 
  public get asbr() {
    return this.getNumberAttribute('asbr');
  }
  public set asbr(value: number) {
    this._asbr = value;
  }
  public resetAsbr() {
    this._asbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asbrInput() {
    return this._asbr;
  }

  // os - computed: false, optional: true, required: false
  private _os?: number; 
  public get os() {
    return this.getNumberAttribute('os');
  }
  public set os(value: number) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // router - computed: false, optional: true, required: false
  private _router?: number; 
  public get router() {
    return this.getNumberAttribute('router');
  }
  public set router(value: number) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vlink - computed: false, optional: true, required: false
  private _vlink?: number; 
  public get vlink() {
    return this.getNumberAttribute('vlink');
  }
  public set vlink(value: number) {
    this._vlink = value;
  }
  public resetVlink() {
    this._vlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlinkInput() {
    return this._vlink;
  }
}
export interface DebugOspfIfsm {
  /**
  * IFSM Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#events DebugOspf#events}
  */
  readonly events?: number;
  /**
  * IFSM Status Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#status DebugOspf#status}
  */
  readonly status?: number;
  /**
  * IFSM Timer Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#timers DebugOspf#timers}
  */
  readonly timers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfIfsmToTerraform(struct?: DebugOspfIfsmOutputReference | DebugOspfIfsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.numberToTerraform(struct!.events),
    status: cdktf.numberToTerraform(struct!.status),
    timers: cdktf.numberToTerraform(struct!.timers),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfIfsmToHclTerraform(struct?: DebugOspfIfsmOutputReference | DebugOspfIfsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.numberToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers: {
      value: cdktf.numberToHclTerraform(struct!.timers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfIfsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfIfsm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfIfsm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._status = undefined;
      this._timers = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._status = value.status;
      this._timers = value.timers;
      this._uuid = value.uuid;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: number; 
  public get events() {
    return this.getNumberAttribute('events');
  }
  public set events(value: number) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timers - computed: false, optional: true, required: false
  private _timers?: number; 
  public get timers() {
    return this.getNumberAttribute('timers');
  }
  public set timers(value: number) {
    this._timers = value;
  }
  public resetTimers() {
    this._timers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfLsa {
  /**
  * LSA Flooding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#flooding DebugOspf#flooding}
  */
  readonly flooding?: number;
  /**
  * LSA Generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#gererate DebugOspf#gererate}
  */
  readonly gererate?: number;
  /**
  * LSA Installation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#install DebugOspf#install}
  */
  readonly install?: number;
  /**
  * LSA MaxAge processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#maxage DebugOspf#maxage}
  */
  readonly maxage?: number;
  /**
  * LSA Refreshment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#refresh DebugOspf#refresh}
  */
  readonly refresh?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfLsaToTerraform(struct?: DebugOspfLsaOutputReference | DebugOspfLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flooding: cdktf.numberToTerraform(struct!.flooding),
    gererate: cdktf.numberToTerraform(struct!.gererate),
    install: cdktf.numberToTerraform(struct!.install),
    maxage: cdktf.numberToTerraform(struct!.maxage),
    refresh: cdktf.numberToTerraform(struct!.refresh),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfLsaToHclTerraform(struct?: DebugOspfLsaOutputReference | DebugOspfLsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flooding: {
      value: cdktf.numberToHclTerraform(struct!.flooding),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gererate: {
      value: cdktf.numberToHclTerraform(struct!.gererate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    install: {
      value: cdktf.numberToHclTerraform(struct!.install),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxage: {
      value: cdktf.numberToHclTerraform(struct!.maxage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh: {
      value: cdktf.numberToHclTerraform(struct!.refresh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfLsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfLsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flooding !== undefined) {
      hasAnyValues = true;
      internalValueResult.flooding = this._flooding;
    }
    if (this._gererate !== undefined) {
      hasAnyValues = true;
      internalValueResult.gererate = this._gererate;
    }
    if (this._install !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install;
    }
    if (this._maxage !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxage = this._maxage;
    }
    if (this._refresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.refresh = this._refresh;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfLsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flooding = undefined;
      this._gererate = undefined;
      this._install = undefined;
      this._maxage = undefined;
      this._refresh = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flooding = value.flooding;
      this._gererate = value.gererate;
      this._install = value.install;
      this._maxage = value.maxage;
      this._refresh = value.refresh;
      this._uuid = value.uuid;
    }
  }

  // flooding - computed: false, optional: true, required: false
  private _flooding?: number; 
  public get flooding() {
    return this.getNumberAttribute('flooding');
  }
  public set flooding(value: number) {
    this._flooding = value;
  }
  public resetFlooding() {
    this._flooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodingInput() {
    return this._flooding;
  }

  // gererate - computed: false, optional: true, required: false
  private _gererate?: number; 
  public get gererate() {
    return this.getNumberAttribute('gererate');
  }
  public set gererate(value: number) {
    this._gererate = value;
  }
  public resetGererate() {
    this._gererate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gererateInput() {
    return this._gererate;
  }

  // install - computed: false, optional: true, required: false
  private _install?: number; 
  public get install() {
    return this.getNumberAttribute('install');
  }
  public set install(value: number) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // maxage - computed: false, optional: true, required: false
  private _maxage?: number; 
  public get maxage() {
    return this.getNumberAttribute('maxage');
  }
  public set maxage(value: number) {
    this._maxage = value;
  }
  public resetMaxage() {
    this._maxage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxageInput() {
    return this._maxage;
  }

  // refresh - computed: false, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfNfsm {
  /**
  * NFSM Event Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#events DebugOspf#events}
  */
  readonly events?: number;
  /**
  * NFSM Status Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#status DebugOspf#status}
  */
  readonly status?: number;
  /**
  * NFSM Timer Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#timers DebugOspf#timers}
  */
  readonly timers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfNfsmToTerraform(struct?: DebugOspfNfsmOutputReference | DebugOspfNfsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.numberToTerraform(struct!.events),
    status: cdktf.numberToTerraform(struct!.status),
    timers: cdktf.numberToTerraform(struct!.timers),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfNfsmToHclTerraform(struct?: DebugOspfNfsmOutputReference | DebugOspfNfsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.numberToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers: {
      value: cdktf.numberToHclTerraform(struct!.timers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfNfsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfNfsm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfNfsm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._events = undefined;
      this._status = undefined;
      this._timers = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._events = value.events;
      this._status = value.status;
      this._timers = value.timers;
      this._uuid = value.uuid;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: number; 
  public get events() {
    return this.getNumberAttribute('events');
  }
  public set events(value: number) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timers - computed: false, optional: true, required: false
  private _timers?: number; 
  public get timers() {
    return this.getNumberAttribute('timers');
  }
  public set timers(value: number) {
    this._timers = value;
  }
  public resetTimers() {
    this._timers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfNsm {
  /**
  * NSM interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#interface DebugOspf#interface}
  */
  readonly interface?: number;
  /**
  * NSM redistribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#redistribute DebugOspf#redistribute}
  */
  readonly redistribute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfNsmToTerraform(struct?: DebugOspfNsmOutputReference | DebugOspfNsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.numberToTerraform(struct!.interface),
    redistribute: cdktf.numberToTerraform(struct!.redistribute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfNsmToHclTerraform(struct?: DebugOspfNsmOutputReference | DebugOspfNsm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.numberToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redistribute: {
      value: cdktf.numberToHclTerraform(struct!.redistribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfNsmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfNsm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._redistribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistribute = this._redistribute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfNsm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interface = undefined;
      this._redistribute = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interface = value.interface;
      this._redistribute = value.redistribute;
      this._uuid = value.uuid;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: number; 
  public get interface() {
    return this.getNumberAttribute('interface');
  }
  public set interface(value: number) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // redistribute - computed: false, optional: true, required: false
  private _redistribute?: number; 
  public get redistribute() {
    return this.getNumberAttribute('redistribute');
  }
  public set redistribute(value: number) {
    this._redistribute = value;
  }
  public resetRedistribute() {
    this._redistribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeInput() {
    return this._redistribute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfPacket {
  /**
  * OSPFv3 Database Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#dd DebugOspf#dd}
  */
  readonly dd?: number;
  /**
  * Detail information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#detail DebugOspf#detail}
  */
  readonly detail?: number;
  /**
  * OSPFv3 Hello
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#hello DebugOspf#hello}
  */
  readonly hello?: number;
  /**
  * OSPFv3 Link State Acknowledgment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ls_ack DebugOspf#ls_ack}
  */
  readonly lsAck?: number;
  /**
  * OSPFv3 Link State Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ls_request DebugOspf#ls_request}
  */
  readonly lsRequest?: number;
  /**
  * OSPFv3 Link State Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ls_update DebugOspf#ls_update}
  */
  readonly lsUpdate?: number;
  /**
  * Packet received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#recv DebugOspf#recv}
  */
  readonly recv?: number;
  /**
  * Packet sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#send DebugOspf#send}
  */
  readonly send?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfPacketToTerraform(struct?: DebugOspfPacketOutputReference | DebugOspfPacket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dd: cdktf.numberToTerraform(struct!.dd),
    detail: cdktf.numberToTerraform(struct!.detail),
    hello: cdktf.numberToTerraform(struct!.hello),
    ls_ack: cdktf.numberToTerraform(struct!.lsAck),
    ls_request: cdktf.numberToTerraform(struct!.lsRequest),
    ls_update: cdktf.numberToTerraform(struct!.lsUpdate),
    recv: cdktf.numberToTerraform(struct!.recv),
    send: cdktf.numberToTerraform(struct!.send),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfPacketToHclTerraform(struct?: DebugOspfPacketOutputReference | DebugOspfPacket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dd: {
      value: cdktf.numberToHclTerraform(struct!.dd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detail: {
      value: cdktf.numberToHclTerraform(struct!.detail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello: {
      value: cdktf.numberToHclTerraform(struct!.hello),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ls_ack: {
      value: cdktf.numberToHclTerraform(struct!.lsAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ls_request: {
      value: cdktf.numberToHclTerraform(struct!.lsRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ls_update: {
      value: cdktf.numberToHclTerraform(struct!.lsUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv: {
      value: cdktf.numberToHclTerraform(struct!.recv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send: {
      value: cdktf.numberToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfPacketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfPacket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dd = this._dd;
    }
    if (this._detail !== undefined) {
      hasAnyValues = true;
      internalValueResult.detail = this._detail;
    }
    if (this._hello !== undefined) {
      hasAnyValues = true;
      internalValueResult.hello = this._hello;
    }
    if (this._lsAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsAck = this._lsAck;
    }
    if (this._lsRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsRequest = this._lsRequest;
    }
    if (this._lsUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsUpdate = this._lsUpdate;
    }
    if (this._recv !== undefined) {
      hasAnyValues = true;
      internalValueResult.recv = this._recv;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfPacket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dd = undefined;
      this._detail = undefined;
      this._hello = undefined;
      this._lsAck = undefined;
      this._lsRequest = undefined;
      this._lsUpdate = undefined;
      this._recv = undefined;
      this._send = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dd = value.dd;
      this._detail = value.detail;
      this._hello = value.hello;
      this._lsAck = value.lsAck;
      this._lsRequest = value.lsRequest;
      this._lsUpdate = value.lsUpdate;
      this._recv = value.recv;
      this._send = value.send;
      this._uuid = value.uuid;
    }
  }

  // dd - computed: false, optional: true, required: false
  private _dd?: number; 
  public get dd() {
    return this.getNumberAttribute('dd');
  }
  public set dd(value: number) {
    this._dd = value;
  }
  public resetDd() {
    this._dd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddInput() {
    return this._dd;
  }

  // detail - computed: false, optional: true, required: false
  private _detail?: number; 
  public get detail() {
    return this.getNumberAttribute('detail');
  }
  public set detail(value: number) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // hello - computed: false, optional: true, required: false
  private _hello?: number; 
  public get hello() {
    return this.getNumberAttribute('hello');
  }
  public set hello(value: number) {
    this._hello = value;
  }
  public resetHello() {
    this._hello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloInput() {
    return this._hello;
  }

  // ls_ack - computed: false, optional: true, required: false
  private _lsAck?: number; 
  public get lsAck() {
    return this.getNumberAttribute('ls_ack');
  }
  public set lsAck(value: number) {
    this._lsAck = value;
  }
  public resetLsAck() {
    this._lsAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsAckInput() {
    return this._lsAck;
  }

  // ls_request - computed: false, optional: true, required: false
  private _lsRequest?: number; 
  public get lsRequest() {
    return this.getNumberAttribute('ls_request');
  }
  public set lsRequest(value: number) {
    this._lsRequest = value;
  }
  public resetLsRequest() {
    this._lsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsRequestInput() {
    return this._lsRequest;
  }

  // ls_update - computed: false, optional: true, required: false
  private _lsUpdate?: number; 
  public get lsUpdate() {
    return this.getNumberAttribute('ls_update');
  }
  public set lsUpdate(value: number) {
    this._lsUpdate = value;
  }
  public resetLsUpdate() {
    this._lsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsUpdateInput() {
    return this._lsUpdate;
  }

  // recv - computed: false, optional: true, required: false
  private _recv?: number; 
  public get recv() {
    return this.getNumberAttribute('recv');
  }
  public set recv(value: number) {
    this._recv = value;
  }
  public resetRecv() {
    this._recv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvInput() {
    return this._recv;
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DebugOspfRoute {
  /**
  * External route calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ase DebugOspf#ase}
  */
  readonly ase?: number;
  /**
  * Inter-Area route calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#ia DebugOspf#ia}
  */
  readonly ia?: number;
  /**
  * Route installation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#install DebugOspf#install}
  */
  readonly install?: number;
  /**
  * SPF calculation information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#spf DebugOspf#spf}
  */
  readonly spf?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#uuid DebugOspf#uuid}
  */
  readonly uuid?: string;
}

export function debugOspfRouteToTerraform(struct?: DebugOspfRouteOutputReference | DebugOspfRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ase: cdktf.numberToTerraform(struct!.ase),
    ia: cdktf.numberToTerraform(struct!.ia),
    install: cdktf.numberToTerraform(struct!.install),
    spf: cdktf.numberToTerraform(struct!.spf),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function debugOspfRouteToHclTerraform(struct?: DebugOspfRouteOutputReference | DebugOspfRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ase: {
      value: cdktf.numberToHclTerraform(struct!.ase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ia: {
      value: cdktf.numberToHclTerraform(struct!.ia),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    install: {
      value: cdktf.numberToHclTerraform(struct!.install),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spf: {
      value: cdktf.numberToHclTerraform(struct!.spf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DebugOspfRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DebugOspfRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ase = this._ase;
    }
    if (this._ia !== undefined) {
      hasAnyValues = true;
      internalValueResult.ia = this._ia;
    }
    if (this._install !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install;
    }
    if (this._spf !== undefined) {
      hasAnyValues = true;
      internalValueResult.spf = this._spf;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DebugOspfRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ase = undefined;
      this._ia = undefined;
      this._install = undefined;
      this._spf = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ase = value.ase;
      this._ia = value.ia;
      this._install = value.install;
      this._spf = value.spf;
      this._uuid = value.uuid;
    }
  }

  // ase - computed: false, optional: true, required: false
  private _ase?: number; 
  public get ase() {
    return this.getNumberAttribute('ase');
  }
  public set ase(value: number) {
    this._ase = value;
  }
  public resetAse() {
    this._ase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aseInput() {
    return this._ase;
  }

  // ia - computed: false, optional: true, required: false
  private _ia?: number; 
  public get ia() {
    return this.getNumberAttribute('ia');
  }
  public set ia(value: number) {
    this._ia = value;
  }
  public resetIa() {
    this._ia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iaInput() {
    return this._ia;
  }

  // install - computed: false, optional: true, required: false
  private _install?: number; 
  public get install() {
    return this.getNumberAttribute('install');
  }
  public set install(value: number) {
    this._install = value;
  }
  public resetInstall() {
    this._install = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install;
  }

  // spf - computed: false, optional: true, required: false
  private _spf?: number; 
  public get spf() {
    return this.getNumberAttribute('spf');
  }
  public set spf(value: number) {
    this._spf = value;
  }
  public resetSpf() {
    this._spf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfInput() {
    return this._spf;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf thunder_debug_ospf}
*/
export class DebugOspf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugOspf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugOspf to import
  * @param importFromId The id of the existing DebugOspf that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugOspf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_ospf thunder_debug_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugOspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugOspfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_ospf',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dumy = config.dumy;
    this._id = config.id;
    this._all.internalValue = config.all;
    this._bfd.internalValue = config.bfd;
    this._events.internalValue = config.events;
    this._ifsm.internalValue = config.ifsm;
    this._lsa.internalValue = config.lsa;
    this._nfsm.internalValue = config.nfsm;
    this._nsm.internalValue = config.nsm;
    this._packet.internalValue = config.packet;
    this._route.internalValue = config.route;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dumy - computed: false, optional: true, required: false
  private _dumy?: number; 
  public get dumy() {
    return this.getNumberAttribute('dumy');
  }
  public set dumy(value: number) {
    this._dumy = value;
  }
  public resetDumy() {
    this._dumy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumyInput() {
    return this._dumy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // all - computed: false, optional: true, required: false
  private _all = new DebugOspfAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: DebugOspfAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new DebugOspfBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DebugOspfBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new DebugOspfEventsOutputReference(this, "events");
  public get events() {
    return this._events;
  }
  public putEvents(value: DebugOspfEvents) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // ifsm - computed: false, optional: true, required: false
  private _ifsm = new DebugOspfIfsmOutputReference(this, "ifsm");
  public get ifsm() {
    return this._ifsm;
  }
  public putIfsm(value: DebugOspfIfsm) {
    this._ifsm.internalValue = value;
  }
  public resetIfsm() {
    this._ifsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifsmInput() {
    return this._ifsm.internalValue;
  }

  // lsa - computed: false, optional: true, required: false
  private _lsa = new DebugOspfLsaOutputReference(this, "lsa");
  public get lsa() {
    return this._lsa;
  }
  public putLsa(value: DebugOspfLsa) {
    this._lsa.internalValue = value;
  }
  public resetLsa() {
    this._lsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaInput() {
    return this._lsa.internalValue;
  }

  // nfsm - computed: false, optional: true, required: false
  private _nfsm = new DebugOspfNfsmOutputReference(this, "nfsm");
  public get nfsm() {
    return this._nfsm;
  }
  public putNfsm(value: DebugOspfNfsm) {
    this._nfsm.internalValue = value;
  }
  public resetNfsm() {
    this._nfsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsmInput() {
    return this._nfsm.internalValue;
  }

  // nsm - computed: false, optional: true, required: false
  private _nsm = new DebugOspfNsmOutputReference(this, "nsm");
  public get nsm() {
    return this._nsm;
  }
  public putNsm(value: DebugOspfNsm) {
    this._nsm.internalValue = value;
  }
  public resetNsm() {
    this._nsm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsmInput() {
    return this._nsm.internalValue;
  }

  // packet - computed: false, optional: true, required: false
  private _packet = new DebugOspfPacketOutputReference(this, "packet");
  public get packet() {
    return this._packet;
  }
  public putPacket(value: DebugOspfPacket) {
    this._packet.internalValue = value;
  }
  public resetPacket() {
    this._packet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetInput() {
    return this._packet.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DebugOspfRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DebugOspfRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dumy: cdktf.numberToTerraform(this._dumy),
      id: cdktf.stringToTerraform(this._id),
      all: debugOspfAllToTerraform(this._all.internalValue),
      bfd: debugOspfBfdToTerraform(this._bfd.internalValue),
      events: debugOspfEventsToTerraform(this._events.internalValue),
      ifsm: debugOspfIfsmToTerraform(this._ifsm.internalValue),
      lsa: debugOspfLsaToTerraform(this._lsa.internalValue),
      nfsm: debugOspfNfsmToTerraform(this._nfsm.internalValue),
      nsm: debugOspfNsmToTerraform(this._nsm.internalValue),
      packet: debugOspfPacketToTerraform(this._packet.internalValue),
      route: debugOspfRouteToTerraform(this._route.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dumy: {
        value: cdktf.numberToHclTerraform(this._dumy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all: {
        value: debugOspfAllToHclTerraform(this._all.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfAllList",
      },
      bfd: {
        value: debugOspfBfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfBfdList",
      },
      events: {
        value: debugOspfEventsToHclTerraform(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfEventsList",
      },
      ifsm: {
        value: debugOspfIfsmToHclTerraform(this._ifsm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfIfsmList",
      },
      lsa: {
        value: debugOspfLsaToHclTerraform(this._lsa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfLsaList",
      },
      nfsm: {
        value: debugOspfNfsmToHclTerraform(this._nfsm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfNfsmList",
      },
      nsm: {
        value: debugOspfNsmToHclTerraform(this._nsm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfNsmList",
      },
      packet: {
        value: debugOspfPacketToHclTerraform(this._packet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfPacketList",
      },
      route: {
        value: debugOspfRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DebugOspfRouteList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
