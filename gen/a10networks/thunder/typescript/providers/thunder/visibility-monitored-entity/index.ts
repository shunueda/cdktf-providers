// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonitoredEntityAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#id VisibilityMonitoredEntityA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
  /**
  * detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#detail VisibilityMonitoredEntityA#detail}
  */
  readonly detail?: VisibilityMonitoredEntityDetailA;
  /**
  * mon_topk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#mon_topk VisibilityMonitoredEntityA#mon_topk}
  */
  readonly monTopk?: VisibilityMonitoredEntityMonTopkA;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#secondary VisibilityMonitoredEntityA#secondary}
  */
  readonly secondary?: VisibilityMonitoredEntitySecondaryA;
  /**
  * sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#sessions VisibilityMonitoredEntityA#sessions}
  */
  readonly sessions?: VisibilityMonitoredEntitySessionsA;
}
export interface VisibilityMonitoredEntityDetailDebugA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitoredEntityDetailDebugAToTerraform(struct?: VisibilityMonitoredEntityDetailDebugAOutputReference | VisibilityMonitoredEntityDetailDebugA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitoredEntityDetailDebugAToHclTerraform(struct?: VisibilityMonitoredEntityDetailDebugAOutputReference | VisibilityMonitoredEntityDetailDebugA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VisibilityMonitoredEntityDetailDebugAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntityDetailDebugA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntityDetailDebugA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface VisibilityMonitoredEntityDetailA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
  /**
  * debug block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#debug VisibilityMonitoredEntityA#debug}
  */
  readonly debug?: VisibilityMonitoredEntityDetailDebugA;
}

export function visibilityMonitoredEntityDetailAToTerraform(struct?: VisibilityMonitoredEntityDetailAOutputReference | VisibilityMonitoredEntityDetailA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    debug: visibilityMonitoredEntityDetailDebugAToTerraform(struct!.debug),
  }
}


export function visibilityMonitoredEntityDetailAToHclTerraform(struct?: VisibilityMonitoredEntityDetailAOutputReference | VisibilityMonitoredEntityDetailA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: visibilityMonitoredEntityDetailDebugAToHclTerraform(struct!.debug),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitoredEntityDetailDebugAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitoredEntityDetailAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntityDetailA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._debug?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntityDetailA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._debug.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._debug.internalValue = value.debug;
    }
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

  // debug - computed: false, optional: true, required: false
  private _debug = new VisibilityMonitoredEntityDetailDebugAOutputReference(this, "debug");
  public get debug() {
    return this._debug;
  }
  public putDebug(value: VisibilityMonitoredEntityDetailDebugA) {
    this._debug.internalValue = value;
  }
  public resetDebug() {
    this._debug.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug.internalValue;
  }
}
export interface VisibilityMonitoredEntityMonTopkSourcesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitoredEntityMonTopkSourcesAToTerraform(struct?: VisibilityMonitoredEntityMonTopkSourcesAOutputReference | VisibilityMonitoredEntityMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitoredEntityMonTopkSourcesAToHclTerraform(struct?: VisibilityMonitoredEntityMonTopkSourcesAOutputReference | VisibilityMonitoredEntityMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VisibilityMonitoredEntityMonTopkSourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntityMonTopkSourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntityMonTopkSourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface VisibilityMonitoredEntityMonTopkA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#sources VisibilityMonitoredEntityA#sources}
  */
  readonly sources?: VisibilityMonitoredEntityMonTopkSourcesA;
}

export function visibilityMonitoredEntityMonTopkAToTerraform(struct?: VisibilityMonitoredEntityMonTopkAOutputReference | VisibilityMonitoredEntityMonTopkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sources: visibilityMonitoredEntityMonTopkSourcesAToTerraform(struct!.sources),
  }
}


export function visibilityMonitoredEntityMonTopkAToHclTerraform(struct?: VisibilityMonitoredEntityMonTopkAOutputReference | VisibilityMonitoredEntityMonTopkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: visibilityMonitoredEntityMonTopkSourcesAToHclTerraform(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitoredEntityMonTopkSourcesAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitoredEntityMonTopkAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntityMonTopkA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntityMonTopkA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._sources.internalValue = value.sources;
    }
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

  // sources - computed: false, optional: true, required: false
  private _sources = new VisibilityMonitoredEntityMonTopkSourcesAOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: VisibilityMonitoredEntityMonTopkSourcesA) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface VisibilityMonitoredEntitySecondaryMonTopkSourcesA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitoredEntitySecondaryMonTopkSourcesAToTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitoredEntitySecondaryMonTopkSourcesAToHclTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkSourcesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntitySecondaryMonTopkSourcesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntitySecondaryMonTopkSourcesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface VisibilityMonitoredEntitySecondaryMonTopkA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#sources VisibilityMonitoredEntityA#sources}
  */
  readonly sources?: VisibilityMonitoredEntitySecondaryMonTopkSourcesA;
}

export function visibilityMonitoredEntitySecondaryMonTopkAToTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sources: visibilityMonitoredEntitySecondaryMonTopkSourcesAToTerraform(struct!.sources),
  }
}


export function visibilityMonitoredEntitySecondaryMonTopkAToHclTerraform(struct?: VisibilityMonitoredEntitySecondaryMonTopkAOutputReference | VisibilityMonitoredEntitySecondaryMonTopkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: visibilityMonitoredEntitySecondaryMonTopkSourcesAToHclTerraform(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitoredEntitySecondaryMonTopkSourcesAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitoredEntitySecondaryMonTopkAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntitySecondaryMonTopkA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntitySecondaryMonTopkA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._sources.internalValue = value.sources;
    }
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

  // sources - computed: false, optional: true, required: false
  private _sources = new VisibilityMonitoredEntitySecondaryMonTopkSourcesAOutputReference(this, "sources");
  public get sources() {
    return this._sources;
  }
  public putSources(value: VisibilityMonitoredEntitySecondaryMonTopkSourcesA) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface VisibilityMonitoredEntitySecondaryA {
  /**
  * mon_topk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#mon_topk VisibilityMonitoredEntityA#mon_topk}
  */
  readonly monTopk?: VisibilityMonitoredEntitySecondaryMonTopkA;
}

export function visibilityMonitoredEntitySecondaryAToTerraform(struct?: VisibilityMonitoredEntitySecondaryAOutputReference | VisibilityMonitoredEntitySecondaryA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mon_topk: visibilityMonitoredEntitySecondaryMonTopkAToTerraform(struct!.monTopk),
  }
}


export function visibilityMonitoredEntitySecondaryAToHclTerraform(struct?: VisibilityMonitoredEntitySecondaryAOutputReference | VisibilityMonitoredEntitySecondaryA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mon_topk: {
      value: visibilityMonitoredEntitySecondaryMonTopkAToHclTerraform(struct!.monTopk),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitoredEntitySecondaryMonTopkAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitoredEntitySecondaryAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntitySecondaryA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monTopk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monTopk = this._monTopk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntitySecondaryA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monTopk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monTopk.internalValue = value.monTopk;
    }
  }

  // mon_topk - computed: false, optional: true, required: false
  private _monTopk = new VisibilityMonitoredEntitySecondaryMonTopkAOutputReference(this, "mon_topk");
  public get monTopk() {
    return this._monTopk;
  }
  public putMonTopk(value: VisibilityMonitoredEntitySecondaryMonTopkA) {
    this._monTopk.internalValue = value;
  }
  public resetMonTopk() {
    this._monTopk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monTopkInput() {
    return this._monTopk.internalValue;
  }
}
export interface VisibilityMonitoredEntitySessionsA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#uuid VisibilityMonitoredEntityA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitoredEntitySessionsAToTerraform(struct?: VisibilityMonitoredEntitySessionsAOutputReference | VisibilityMonitoredEntitySessionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitoredEntitySessionsAToHclTerraform(struct?: VisibilityMonitoredEntitySessionsAOutputReference | VisibilityMonitoredEntitySessionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VisibilityMonitoredEntitySessionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitoredEntitySessionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitoredEntitySessionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity thunder_visibility_monitored_entity}
*/
export class VisibilityMonitoredEntityA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitored_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonitoredEntityA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonitoredEntityA to import
  * @param importFromId The id of the existing VisibilityMonitoredEntityA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonitoredEntityA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitored_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_monitored_entity thunder_visibility_monitored_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonitoredEntityAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonitoredEntityAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitored_entity',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._detail.internalValue = config.detail;
    this._monTopk.internalValue = config.monTopk;
    this._secondary.internalValue = config.secondary;
    this._sessions.internalValue = config.sessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // detail - computed: false, optional: true, required: false
  private _detail = new VisibilityMonitoredEntityDetailAOutputReference(this, "detail");
  public get detail() {
    return this._detail;
  }
  public putDetail(value: VisibilityMonitoredEntityDetailA) {
    this._detail.internalValue = value;
  }
  public resetDetail() {
    this._detail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail.internalValue;
  }

  // mon_topk - computed: false, optional: true, required: false
  private _monTopk = new VisibilityMonitoredEntityMonTopkAOutputReference(this, "mon_topk");
  public get monTopk() {
    return this._monTopk;
  }
  public putMonTopk(value: VisibilityMonitoredEntityMonTopkA) {
    this._monTopk.internalValue = value;
  }
  public resetMonTopk() {
    this._monTopk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monTopkInput() {
    return this._monTopk.internalValue;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary = new VisibilityMonitoredEntitySecondaryAOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: VisibilityMonitoredEntitySecondaryA) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions = new VisibilityMonitoredEntitySessionsAOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: VisibilityMonitoredEntitySessionsA) {
    this._sessions.internalValue = value;
  }
  public resetSessions() {
    this._sessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      detail: visibilityMonitoredEntityDetailAToTerraform(this._detail.internalValue),
      mon_topk: visibilityMonitoredEntityMonTopkAToTerraform(this._monTopk.internalValue),
      secondary: visibilityMonitoredEntitySecondaryAToTerraform(this._secondary.internalValue),
      sessions: visibilityMonitoredEntitySessionsAToTerraform(this._sessions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detail: {
        value: visibilityMonitoredEntityDetailAToHclTerraform(this._detail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntityDetailAList",
      },
      mon_topk: {
        value: visibilityMonitoredEntityMonTopkAToHclTerraform(this._monTopk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntityMonTopkAList",
      },
      secondary: {
        value: visibilityMonitoredEntitySecondaryAToHclTerraform(this._secondary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntitySecondaryAList",
      },
      sessions: {
        value: visibilityMonitoredEntitySessionsAToHclTerraform(this._sessions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitoredEntitySessionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
