// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriRouterPairedToGcpConnectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#bandwidth EriRouterPairedToGcpConnectionV1#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#id EriRouterPairedToGcpConnectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#name EriRouterPairedToGcpConnectionV1#name}
  */
  readonly name: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#destination EriRouterPairedToGcpConnectionV1#destination}
  */
  readonly destination: EriRouterPairedToGcpConnectionV1Destination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#source EriRouterPairedToGcpConnectionV1#source}
  */
  readonly source: EriRouterPairedToGcpConnectionV1Source;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#timeouts EriRouterPairedToGcpConnectionV1#timeouts}
  */
  readonly timeouts?: EriRouterPairedToGcpConnectionV1Timeouts;
}
export interface EriRouterPairedToGcpConnectionV1DestinationPrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#interconnect EriRouterPairedToGcpConnectionV1#interconnect}
  */
  readonly interconnect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#pairing_key EriRouterPairedToGcpConnectionV1#pairing_key}
  */
  readonly pairingKey: string;
}

export function eriRouterPairedToGcpConnectionV1DestinationPrimaryToTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationPrimaryOutputReference | EriRouterPairedToGcpConnectionV1DestinationPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interconnect: cdktf.stringToTerraform(struct!.interconnect),
    pairing_key: cdktf.stringToTerraform(struct!.pairingKey),
  }
}


export function eriRouterPairedToGcpConnectionV1DestinationPrimaryToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationPrimaryOutputReference | EriRouterPairedToGcpConnectionV1DestinationPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interconnect: {
      value: cdktf.stringToHclTerraform(struct!.interconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.pairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1DestinationPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1DestinationPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnect = this._interconnect;
    }
    if (this._pairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKey = this._pairingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1DestinationPrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interconnect = undefined;
      this._pairingKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interconnect = value.interconnect;
      this._pairingKey = value.pairingKey;
    }
  }

  // interconnect - computed: false, optional: false, required: true
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
  }

  // pairing_key - computed: false, optional: false, required: true
  private _pairingKey?: string; 
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }
  public set pairingKey(value: string) {
    this._pairingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyInput() {
    return this._pairingKey;
  }
}
export interface EriRouterPairedToGcpConnectionV1DestinationSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#interconnect EriRouterPairedToGcpConnectionV1#interconnect}
  */
  readonly interconnect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#pairing_key EriRouterPairedToGcpConnectionV1#pairing_key}
  */
  readonly pairingKey: string;
}

export function eriRouterPairedToGcpConnectionV1DestinationSecondaryToTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationSecondaryOutputReference | EriRouterPairedToGcpConnectionV1DestinationSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interconnect: cdktf.stringToTerraform(struct!.interconnect),
    pairing_key: cdktf.stringToTerraform(struct!.pairingKey),
  }
}


export function eriRouterPairedToGcpConnectionV1DestinationSecondaryToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationSecondaryOutputReference | EriRouterPairedToGcpConnectionV1DestinationSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interconnect: {
      value: cdktf.stringToHclTerraform(struct!.interconnect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pairing_key: {
      value: cdktf.stringToHclTerraform(struct!.pairingKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1DestinationSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1DestinationSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.interconnect = this._interconnect;
    }
    if (this._pairingKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairingKey = this._pairingKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1DestinationSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interconnect = undefined;
      this._pairingKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interconnect = value.interconnect;
      this._pairingKey = value.pairingKey;
    }
  }

  // interconnect - computed: false, optional: false, required: true
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
  }

  // pairing_key - computed: false, optional: false, required: true
  private _pairingKey?: string; 
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }
  public set pairingKey(value: string) {
    this._pairingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairingKeyInput() {
    return this._pairingKey;
  }
}
export interface EriRouterPairedToGcpConnectionV1Destination {
  /**
  * primary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#primary EriRouterPairedToGcpConnectionV1#primary}
  */
  readonly primary: EriRouterPairedToGcpConnectionV1DestinationPrimary;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#secondary EriRouterPairedToGcpConnectionV1#secondary}
  */
  readonly secondary: EriRouterPairedToGcpConnectionV1DestinationSecondary;
}

export function eriRouterPairedToGcpConnectionV1DestinationToTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationOutputReference | EriRouterPairedToGcpConnectionV1Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: eriRouterPairedToGcpConnectionV1DestinationPrimaryToTerraform(struct!.primary),
    secondary: eriRouterPairedToGcpConnectionV1DestinationSecondaryToTerraform(struct!.secondary),
  }
}


export function eriRouterPairedToGcpConnectionV1DestinationToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1DestinationOutputReference | EriRouterPairedToGcpConnectionV1Destination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: eriRouterPairedToGcpConnectionV1DestinationPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "list",
      storageClassType: "EriRouterPairedToGcpConnectionV1DestinationPrimaryList",
    },
    secondary: {
      value: eriRouterPairedToGcpConnectionV1DestinationSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "list",
      storageClassType: "EriRouterPairedToGcpConnectionV1DestinationSecondaryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1DestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1Destination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1Destination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
    }
  }

  // qos_type - computed: true, optional: false, required: false
  public get qosType() {
    return this.getStringAttribute('qos_type');
  }

  // primary - computed: false, optional: false, required: true
  private _primary = new EriRouterPairedToGcpConnectionV1DestinationPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: EriRouterPairedToGcpConnectionV1DestinationPrimary) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: false, optional: false, required: true
  private _secondary = new EriRouterPairedToGcpConnectionV1DestinationSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: EriRouterPairedToGcpConnectionV1DestinationSecondary) {
    this._secondary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}
export interface EriRouterPairedToGcpConnectionV1SourceRouteFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#in EriRouterPairedToGcpConnectionV1#in}
  */
  readonly in: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#out EriRouterPairedToGcpConnectionV1#out}
  */
  readonly out: string;
}

export function eriRouterPairedToGcpConnectionV1SourceRouteFilterToTerraform(struct?: EriRouterPairedToGcpConnectionV1SourceRouteFilterOutputReference | EriRouterPairedToGcpConnectionV1SourceRouteFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.stringToTerraform(struct!.in),
    out: cdktf.stringToTerraform(struct!.out),
  }
}


export function eriRouterPairedToGcpConnectionV1SourceRouteFilterToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1SourceRouteFilterOutputReference | EriRouterPairedToGcpConnectionV1SourceRouteFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out: {
      value: cdktf.stringToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1SourceRouteFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1SourceRouteFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1SourceRouteFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._in = undefined;
      this._out = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._in = value.in;
      this._out = value.out;
    }
  }

  // in - computed: false, optional: false, required: true
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // out - computed: false, optional: false, required: true
  private _out?: string; 
  public get out() {
    return this.getStringAttribute('out');
  }
  public set out(value: string) {
    this._out = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }
}
export interface EriRouterPairedToGcpConnectionV1Source {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#group_name EriRouterPairedToGcpConnectionV1#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#primary_med_out EriRouterPairedToGcpConnectionV1#primary_med_out}
  */
  readonly primaryMedOut: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#router_id EriRouterPairedToGcpConnectionV1#router_id}
  */
  readonly routerId: string;
  /**
  * route_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#route_filter EriRouterPairedToGcpConnectionV1#route_filter}
  */
  readonly routeFilter: EriRouterPairedToGcpConnectionV1SourceRouteFilter;
}

export function eriRouterPairedToGcpConnectionV1SourceToTerraform(struct?: EriRouterPairedToGcpConnectionV1SourceOutputReference | EriRouterPairedToGcpConnectionV1Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    primary_med_out: cdktf.numberToTerraform(struct!.primaryMedOut),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    route_filter: eriRouterPairedToGcpConnectionV1SourceRouteFilterToTerraform(struct!.routeFilter),
  }
}


export function eriRouterPairedToGcpConnectionV1SourceToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1SourceOutputReference | EriRouterPairedToGcpConnectionV1Source): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_med_out: {
      value: cdktf.numberToHclTerraform(struct!.primaryMedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_filter: {
      value: eriRouterPairedToGcpConnectionV1SourceRouteFilterToHclTerraform(struct!.routeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "EriRouterPairedToGcpConnectionV1SourceRouteFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1SourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1Source | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._primaryMedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryMedOut = this._primaryMedOut;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._routeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeFilter = this._routeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1Source | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._primaryMedOut = undefined;
      this._routerId = undefined;
      this._routeFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._primaryMedOut = value.primaryMedOut;
      this._routerId = value.routerId;
      this._routeFilter.internalValue = value.routeFilter;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // primary_med_out - computed: false, optional: false, required: true
  private _primaryMedOut?: number; 
  public get primaryMedOut() {
    return this.getNumberAttribute('primary_med_out');
  }
  public set primaryMedOut(value: number) {
    this._primaryMedOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryMedOutInput() {
    return this._primaryMedOut;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // secondary_med_out - computed: true, optional: false, required: false
  public get secondaryMedOut() {
    return this.getNumberAttribute('secondary_med_out');
  }

  // route_filter - computed: false, optional: false, required: true
  private _routeFilter = new EriRouterPairedToGcpConnectionV1SourceRouteFilterOutputReference(this, "route_filter");
  public get routeFilter() {
    return this._routeFilter;
  }
  public putRouteFilter(value: EriRouterPairedToGcpConnectionV1SourceRouteFilter) {
    this._routeFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterInput() {
    return this._routeFilter.internalValue;
  }
}
export interface EriRouterPairedToGcpConnectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#create EriRouterPairedToGcpConnectionV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#delete EriRouterPairedToGcpConnectionV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#update EriRouterPairedToGcpConnectionV1#update}
  */
  readonly update?: string;
}

export function eriRouterPairedToGcpConnectionV1TimeoutsToTerraform(struct?: EriRouterPairedToGcpConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function eriRouterPairedToGcpConnectionV1TimeoutsToHclTerraform(struct?: EriRouterPairedToGcpConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriRouterPairedToGcpConnectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriRouterPairedToGcpConnectionV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriRouterPairedToGcpConnectionV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1 fic_eri_router_paired_to_gcp_connection_v1}
*/
export class EriRouterPairedToGcpConnectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_router_paired_to_gcp_connection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriRouterPairedToGcpConnectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriRouterPairedToGcpConnectionV1 to import
  * @param importFromId The id of the existing EriRouterPairedToGcpConnectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriRouterPairedToGcpConnectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_router_paired_to_gcp_connection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_router_paired_to_gcp_connection_v1 fic_eri_router_paired_to_gcp_connection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriRouterPairedToGcpConnectionV1Config
  */
  public constructor(scope: Construct, id: string, config: EriRouterPairedToGcpConnectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_router_paired_to_gcp_connection_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6',
        providerVersionConstraint: '0.5.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._id = config.id;
    this._name = config.name;
    this._destination.internalValue = config.destination;
    this._source.internalValue = config.source;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // primary_connected_network_address - computed: true, optional: false, required: false
  public get primaryConnectedNetworkAddress() {
    return this.getStringAttribute('primary_connected_network_address');
  }

  // redundant - computed: true, optional: false, required: false
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }

  // secondary_connected_network_address - computed: true, optional: false, required: false
  public get secondaryConnectedNetworkAddress() {
    return this.getStringAttribute('secondary_connected_network_address');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new EriRouterPairedToGcpConnectionV1DestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EriRouterPairedToGcpConnectionV1Destination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new EriRouterPairedToGcpConnectionV1SourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: EriRouterPairedToGcpConnectionV1Source) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriRouterPairedToGcpConnectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriRouterPairedToGcpConnectionV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      destination: eriRouterPairedToGcpConnectionV1DestinationToTerraform(this._destination.internalValue),
      source: eriRouterPairedToGcpConnectionV1SourceToTerraform(this._source.internalValue),
      timeouts: eriRouterPairedToGcpConnectionV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: eriRouterPairedToGcpConnectionV1DestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriRouterPairedToGcpConnectionV1DestinationList",
      },
      source: {
        value: eriRouterPairedToGcpConnectionV1SourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EriRouterPairedToGcpConnectionV1SourceList",
      },
      timeouts: {
        value: eriRouterPairedToGcpConnectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriRouterPairedToGcpConnectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
