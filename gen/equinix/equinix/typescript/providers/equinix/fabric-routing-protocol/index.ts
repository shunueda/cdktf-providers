// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricRoutingProtocolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable AS number override
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#as_override_enabled FabricRoutingProtocol#as_override_enabled}
  */
  readonly asOverrideEnabled?: boolean | cdktf.IResolvable;
  /**
  * BGP authorization key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#bgp_auth_key FabricRoutingProtocol#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * Connection URI associated with Routing Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#connection_uuid FabricRoutingProtocol#connection_uuid}
  */
  readonly connectionUuid: string;
  /**
  * Customer-provided ASN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#customer_asn FabricRoutingProtocol#customer_asn}
  */
  readonly customerAsn?: number;
  /**
  * Customer-provided Fabric Routing Protocol description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#description FabricRoutingProtocol#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#id FabricRoutingProtocol#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Routing Protocol name. An alpha-numeric 24 characters string which can include only hyphens and underscores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#name FabricRoutingProtocol#name}
  */
  readonly name?: string;
  /**
  * Defines the routing protocol type like BGP or DIRECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#type FabricRoutingProtocol#type}
  */
  readonly type?: string;
  /**
  * Equinix-assigned routing protocol identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#uuid FabricRoutingProtocol#uuid}
  */
  readonly uuid?: string;
  /**
  * bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#bfd FabricRoutingProtocol#bfd}
  */
  readonly bfd?: FabricRoutingProtocolBfd[] | cdktf.IResolvable;
  /**
  * bgp_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#bgp_ipv4 FabricRoutingProtocol#bgp_ipv4}
  */
  readonly bgpIpv4?: FabricRoutingProtocolBgpIpv4[] | cdktf.IResolvable;
  /**
  * bgp_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#bgp_ipv6 FabricRoutingProtocol#bgp_ipv6}
  */
  readonly bgpIpv6?: FabricRoutingProtocolBgpIpv6[] | cdktf.IResolvable;
  /**
  * direct_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#direct_ipv4 FabricRoutingProtocol#direct_ipv4}
  */
  readonly directIpv4?: FabricRoutingProtocolDirectIpv4[] | cdktf.IResolvable;
  /**
  * direct_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#direct_ipv6 FabricRoutingProtocol#direct_ipv6}
  */
  readonly directIpv6?: FabricRoutingProtocolDirectIpv6[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#timeouts FabricRoutingProtocol#timeouts}
  */
  readonly timeouts?: FabricRoutingProtocolTimeouts;
}
export interface FabricRoutingProtocolChange {
}

export function fabricRoutingProtocolChangeToTerraform(struct?: FabricRoutingProtocolChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricRoutingProtocolChangeToHclTerraform(struct?: FabricRoutingProtocolChange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricRoutingProtocolChangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolChange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolChange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class FabricRoutingProtocolChangeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolChangeOutputReference {
    return new FabricRoutingProtocolChangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolChangeLog {
}

export function fabricRoutingProtocolChangeLogToTerraform(struct?: FabricRoutingProtocolChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricRoutingProtocolChangeLogToHclTerraform(struct?: FabricRoutingProtocolChangeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricRoutingProtocolChangeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolChangeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolChangeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_email - computed: true, optional: false, required: false
  public get createdByEmail() {
    return this.getStringAttribute('created_by_email');
  }

  // created_by_full_name - computed: true, optional: false, required: false
  public get createdByFullName() {
    return this.getStringAttribute('created_by_full_name');
  }

  // created_date_time - computed: true, optional: false, required: false
  public get createdDateTime() {
    return this.getStringAttribute('created_date_time');
  }

  // deleted_by - computed: true, optional: false, required: false
  public get deletedBy() {
    return this.getStringAttribute('deleted_by');
  }

  // deleted_by_email - computed: true, optional: false, required: false
  public get deletedByEmail() {
    return this.getStringAttribute('deleted_by_email');
  }

  // deleted_by_full_name - computed: true, optional: false, required: false
  public get deletedByFullName() {
    return this.getStringAttribute('deleted_by_full_name');
  }

  // deleted_date_time - computed: true, optional: false, required: false
  public get deletedDateTime() {
    return this.getStringAttribute('deleted_date_time');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_email - computed: true, optional: false, required: false
  public get updatedByEmail() {
    return this.getStringAttribute('updated_by_email');
  }

  // updated_by_full_name - computed: true, optional: false, required: false
  public get updatedByFullName() {
    return this.getStringAttribute('updated_by_full_name');
  }

  // updated_date_time - computed: true, optional: false, required: false
  public get updatedDateTime() {
    return this.getStringAttribute('updated_date_time');
  }
}

export class FabricRoutingProtocolChangeLogList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolChangeLogOutputReference {
    return new FabricRoutingProtocolChangeLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolOperationErrorsAdditionalInfo {
}

export function fabricRoutingProtocolOperationErrorsAdditionalInfoToTerraform(struct?: FabricRoutingProtocolOperationErrorsAdditionalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricRoutingProtocolOperationErrorsAdditionalInfoToHclTerraform(struct?: FabricRoutingProtocolOperationErrorsAdditionalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricRoutingProtocolOperationErrorsAdditionalInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolOperationErrorsAdditionalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolOperationErrorsAdditionalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class FabricRoutingProtocolOperationErrorsAdditionalInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolOperationErrorsAdditionalInfoOutputReference {
    return new FabricRoutingProtocolOperationErrorsAdditionalInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolOperationErrors {
}

export function fabricRoutingProtocolOperationErrorsToTerraform(struct?: FabricRoutingProtocolOperationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricRoutingProtocolOperationErrorsToHclTerraform(struct?: FabricRoutingProtocolOperationErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricRoutingProtocolOperationErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolOperationErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolOperationErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_info - computed: true, optional: false, required: false
  private _additionalInfo = new FabricRoutingProtocolOperationErrorsAdditionalInfoList(this, "additional_info", false);
  public get additionalInfo() {
    return this._additionalInfo;
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // help - computed: true, optional: false, required: false
  public get help() {
    return this.getStringAttribute('help');
  }
}

export class FabricRoutingProtocolOperationErrorsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolOperationErrorsOutputReference {
    return new FabricRoutingProtocolOperationErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolOperation {
}

export function fabricRoutingProtocolOperationToTerraform(struct?: FabricRoutingProtocolOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricRoutingProtocolOperationToHclTerraform(struct?: FabricRoutingProtocolOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricRoutingProtocolOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new FabricRoutingProtocolOperationErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }
}

export class FabricRoutingProtocolOperationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolOperationOutputReference {
    return new FabricRoutingProtocolOperationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolBfd {
  /**
  * Bidirectional Forwarding Detection enablement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#enabled FabricRoutingProtocol#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Interval range between the received BFD control packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#interval FabricRoutingProtocol#interval}
  */
  readonly interval?: string;
}

export function fabricRoutingProtocolBfdToTerraform(struct?: FabricRoutingProtocolBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function fabricRoutingProtocolBfdToHclTerraform(struct?: FabricRoutingProtocolBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricRoutingProtocolBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._interval = value.interval;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}

export class FabricRoutingProtocolBfdList extends cdktf.ComplexList {
  public internalValue? : FabricRoutingProtocolBfd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolBfdOutputReference {
    return new FabricRoutingProtocolBfdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolBgpIpv4 {
  /**
  * Customer side peering ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#customer_peer_ip FabricRoutingProtocol#customer_peer_ip}
  */
  readonly customerPeerIp: string;
  /**
  * Admin status for the BGP session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#enabled FabricRoutingProtocol#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Inbound Multi Exit Discriminator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#inbound_med FabricRoutingProtocol#inbound_med}
  */
  readonly inboundMed?: number;
  /**
  * AS path prepend count. One of: 0, 1, 3, 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#outbound_as_prepend_count FabricRoutingProtocol#outbound_as_prepend_count}
  */
  readonly outboundAsPrependCount?: string;
  /**
  * Outbound Multi Exit Discriminator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#outbound_med FabricRoutingProtocol#outbound_med}
  */
  readonly outboundMed?: number;
}

export function fabricRoutingProtocolBgpIpv4ToTerraform(struct?: FabricRoutingProtocolBgpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_peer_ip: cdktf.stringToTerraform(struct!.customerPeerIp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inbound_med: cdktf.numberToTerraform(struct!.inboundMed),
    outbound_as_prepend_count: cdktf.stringToTerraform(struct!.outboundAsPrependCount),
    outbound_med: cdktf.numberToTerraform(struct!.outboundMed),
  }
}


export function fabricRoutingProtocolBgpIpv4ToHclTerraform(struct?: FabricRoutingProtocolBgpIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerPeerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inbound_med: {
      value: cdktf.numberToHclTerraform(struct!.inboundMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_as_prepend_count: {
      value: cdktf.stringToHclTerraform(struct!.outboundAsPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_med: {
      value: cdktf.numberToHclTerraform(struct!.outboundMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricRoutingProtocolBgpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolBgpIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerPeerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerPeerIp = this._customerPeerIp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inboundMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundMed = this._inboundMed;
    }
    if (this._outboundAsPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAsPrependCount = this._outboundAsPrependCount;
    }
    if (this._outboundMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMed = this._outboundMed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolBgpIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerPeerIp = undefined;
      this._enabled = undefined;
      this._inboundMed = undefined;
      this._outboundAsPrependCount = undefined;
      this._outboundMed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerPeerIp = value.customerPeerIp;
      this._enabled = value.enabled;
      this._inboundMed = value.inboundMed;
      this._outboundAsPrependCount = value.outboundAsPrependCount;
      this._outboundMed = value.outboundMed;
    }
  }

  // customer_peer_ip - computed: false, optional: false, required: true
  private _customerPeerIp?: string; 
  public get customerPeerIp() {
    return this.getStringAttribute('customer_peer_ip');
  }
  public set customerPeerIp(value: string) {
    this._customerPeerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerPeerIpInput() {
    return this._customerPeerIp;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // equinix_peer_ip - computed: true, optional: false, required: false
  public get equinixPeerIp() {
    return this.getStringAttribute('equinix_peer_ip');
  }

  // inbound_med - computed: true, optional: true, required: false
  private _inboundMed?: number; 
  public get inboundMed() {
    return this.getNumberAttribute('inbound_med');
  }
  public set inboundMed(value: number) {
    this._inboundMed = value;
  }
  public resetInboundMed() {
    this._inboundMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundMedInput() {
    return this._inboundMed;
  }

  // outbound_as_prepend_count - computed: true, optional: true, required: false
  private _outboundAsPrependCount?: string; 
  public get outboundAsPrependCount() {
    return this.getStringAttribute('outbound_as_prepend_count');
  }
  public set outboundAsPrependCount(value: string) {
    this._outboundAsPrependCount = value;
  }
  public resetOutboundAsPrependCount() {
    this._outboundAsPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAsPrependCountInput() {
    return this._outboundAsPrependCount;
  }

  // outbound_med - computed: true, optional: true, required: false
  private _outboundMed?: number; 
  public get outboundMed() {
    return this.getNumberAttribute('outbound_med');
  }
  public set outboundMed(value: number) {
    this._outboundMed = value;
  }
  public resetOutboundMed() {
    this._outboundMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMedInput() {
    return this._outboundMed;
  }
}

export class FabricRoutingProtocolBgpIpv4List extends cdktf.ComplexList {
  public internalValue? : FabricRoutingProtocolBgpIpv4[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolBgpIpv4OutputReference {
    return new FabricRoutingProtocolBgpIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolBgpIpv6 {
  /**
  * Customer side peering ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#customer_peer_ip FabricRoutingProtocol#customer_peer_ip}
  */
  readonly customerPeerIp: string;
  /**
  * Admin status for the BGP session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#enabled FabricRoutingProtocol#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Inbound Multi Exit Discriminator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#inbound_med FabricRoutingProtocol#inbound_med}
  */
  readonly inboundMed?: number;
  /**
  * AS path prepend count. One of: 0, 1, 3, 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#outbound_as_prepend_count FabricRoutingProtocol#outbound_as_prepend_count}
  */
  readonly outboundAsPrependCount?: string;
  /**
  * Outbound Multi Exit Discriminator attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#outbound_med FabricRoutingProtocol#outbound_med}
  */
  readonly outboundMed?: number;
}

export function fabricRoutingProtocolBgpIpv6ToTerraform(struct?: FabricRoutingProtocolBgpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_peer_ip: cdktf.stringToTerraform(struct!.customerPeerIp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    inbound_med: cdktf.numberToTerraform(struct!.inboundMed),
    outbound_as_prepend_count: cdktf.stringToTerraform(struct!.outboundAsPrependCount),
    outbound_med: cdktf.numberToTerraform(struct!.outboundMed),
  }
}


export function fabricRoutingProtocolBgpIpv6ToHclTerraform(struct?: FabricRoutingProtocolBgpIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerPeerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inbound_med: {
      value: cdktf.numberToHclTerraform(struct!.inboundMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_as_prepend_count: {
      value: cdktf.stringToHclTerraform(struct!.outboundAsPrependCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_med: {
      value: cdktf.numberToHclTerraform(struct!.outboundMed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricRoutingProtocolBgpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolBgpIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerPeerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerPeerIp = this._customerPeerIp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._inboundMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundMed = this._inboundMed;
    }
    if (this._outboundAsPrependCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundAsPrependCount = this._outboundAsPrependCount;
    }
    if (this._outboundMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundMed = this._outboundMed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolBgpIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerPeerIp = undefined;
      this._enabled = undefined;
      this._inboundMed = undefined;
      this._outboundAsPrependCount = undefined;
      this._outboundMed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerPeerIp = value.customerPeerIp;
      this._enabled = value.enabled;
      this._inboundMed = value.inboundMed;
      this._outboundAsPrependCount = value.outboundAsPrependCount;
      this._outboundMed = value.outboundMed;
    }
  }

  // customer_peer_ip - computed: false, optional: false, required: true
  private _customerPeerIp?: string; 
  public get customerPeerIp() {
    return this.getStringAttribute('customer_peer_ip');
  }
  public set customerPeerIp(value: string) {
    this._customerPeerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerPeerIpInput() {
    return this._customerPeerIp;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // equinix_peer_ip - computed: true, optional: false, required: false
  public get equinixPeerIp() {
    return this.getStringAttribute('equinix_peer_ip');
  }

  // inbound_med - computed: true, optional: true, required: false
  private _inboundMed?: number; 
  public get inboundMed() {
    return this.getNumberAttribute('inbound_med');
  }
  public set inboundMed(value: number) {
    this._inboundMed = value;
  }
  public resetInboundMed() {
    this._inboundMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundMedInput() {
    return this._inboundMed;
  }

  // outbound_as_prepend_count - computed: true, optional: true, required: false
  private _outboundAsPrependCount?: string; 
  public get outboundAsPrependCount() {
    return this.getStringAttribute('outbound_as_prepend_count');
  }
  public set outboundAsPrependCount(value: string) {
    this._outboundAsPrependCount = value;
  }
  public resetOutboundAsPrependCount() {
    this._outboundAsPrependCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundAsPrependCountInput() {
    return this._outboundAsPrependCount;
  }

  // outbound_med - computed: true, optional: true, required: false
  private _outboundMed?: number; 
  public get outboundMed() {
    return this.getNumberAttribute('outbound_med');
  }
  public set outboundMed(value: number) {
    this._outboundMed = value;
  }
  public resetOutboundMed() {
    this._outboundMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundMedInput() {
    return this._outboundMed;
  }
}

export class FabricRoutingProtocolBgpIpv6List extends cdktf.ComplexList {
  public internalValue? : FabricRoutingProtocolBgpIpv6[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolBgpIpv6OutputReference {
    return new FabricRoutingProtocolBgpIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolDirectIpv4 {
  /**
  * Equinix side Interface IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#equinix_iface_ip FabricRoutingProtocol#equinix_iface_ip}
  */
  readonly equinixIfaceIp: string;
}

export function fabricRoutingProtocolDirectIpv4ToTerraform(struct?: FabricRoutingProtocolDirectIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equinix_iface_ip: cdktf.stringToTerraform(struct!.equinixIfaceIp),
  }
}


export function fabricRoutingProtocolDirectIpv4ToHclTerraform(struct?: FabricRoutingProtocolDirectIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equinix_iface_ip: {
      value: cdktf.stringToHclTerraform(struct!.equinixIfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricRoutingProtocolDirectIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolDirectIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equinixIfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.equinixIfaceIp = this._equinixIfaceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolDirectIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equinixIfaceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equinixIfaceIp = value.equinixIfaceIp;
    }
  }

  // equinix_iface_ip - computed: false, optional: false, required: true
  private _equinixIfaceIp?: string; 
  public get equinixIfaceIp() {
    return this.getStringAttribute('equinix_iface_ip');
  }
  public set equinixIfaceIp(value: string) {
    this._equinixIfaceIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get equinixIfaceIpInput() {
    return this._equinixIfaceIp;
  }
}

export class FabricRoutingProtocolDirectIpv4List extends cdktf.ComplexList {
  public internalValue? : FabricRoutingProtocolDirectIpv4[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolDirectIpv4OutputReference {
    return new FabricRoutingProtocolDirectIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolDirectIpv6 {
  /**
  * Equinix side Interface IP address
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#equinix_iface_ip FabricRoutingProtocol#equinix_iface_ip}
  */
  readonly equinixIfaceIp?: string;
}

export function fabricRoutingProtocolDirectIpv6ToTerraform(struct?: FabricRoutingProtocolDirectIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equinix_iface_ip: cdktf.stringToTerraform(struct!.equinixIfaceIp),
  }
}


export function fabricRoutingProtocolDirectIpv6ToHclTerraform(struct?: FabricRoutingProtocolDirectIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equinix_iface_ip: {
      value: cdktf.stringToHclTerraform(struct!.equinixIfaceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricRoutingProtocolDirectIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FabricRoutingProtocolDirectIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equinixIfaceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.equinixIfaceIp = this._equinixIfaceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolDirectIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equinixIfaceIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equinixIfaceIp = value.equinixIfaceIp;
    }
  }

  // equinix_iface_ip - computed: false, optional: true, required: false
  private _equinixIfaceIp?: string; 
  public get equinixIfaceIp() {
    return this.getStringAttribute('equinix_iface_ip');
  }
  public set equinixIfaceIp(value: string) {
    this._equinixIfaceIp = value;
  }
  public resetEquinixIfaceIp() {
    this._equinixIfaceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equinixIfaceIpInput() {
    return this._equinixIfaceIp;
  }
}

export class FabricRoutingProtocolDirectIpv6List extends cdktf.ComplexList {
  public internalValue? : FabricRoutingProtocolDirectIpv6[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FabricRoutingProtocolDirectIpv6OutputReference {
    return new FabricRoutingProtocolDirectIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricRoutingProtocolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#create FabricRoutingProtocol#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#delete FabricRoutingProtocol#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#read FabricRoutingProtocol#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#update FabricRoutingProtocol#update}
  */
  readonly update?: string;
}

export function fabricRoutingProtocolTimeoutsToTerraform(struct?: FabricRoutingProtocolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fabricRoutingProtocolTimeoutsToHclTerraform(struct?: FabricRoutingProtocolTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class FabricRoutingProtocolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FabricRoutingProtocolTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricRoutingProtocolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol equinix_fabric_routing_protocol}
*/
export class FabricRoutingProtocol extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_routing_protocol";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricRoutingProtocol resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricRoutingProtocol to import
  * @param importFromId The id of the existing FabricRoutingProtocol that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricRoutingProtocol to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_routing_protocol", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/fabric_routing_protocol equinix_fabric_routing_protocol} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricRoutingProtocolConfig
  */
  public constructor(scope: Construct, id: string, config: FabricRoutingProtocolConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_routing_protocol',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asOverrideEnabled = config.asOverrideEnabled;
    this._bgpAuthKey = config.bgpAuthKey;
    this._connectionUuid = config.connectionUuid;
    this._customerAsn = config.customerAsn;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._uuid = config.uuid;
    this._bfd.internalValue = config.bfd;
    this._bgpIpv4.internalValue = config.bgpIpv4;
    this._bgpIpv6.internalValue = config.bgpIpv6;
    this._directIpv4.internalValue = config.directIpv4;
    this._directIpv6.internalValue = config.directIpv6;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_override_enabled - computed: true, optional: true, required: false
  private _asOverrideEnabled?: boolean | cdktf.IResolvable; 
  public get asOverrideEnabled() {
    return this.getBooleanAttribute('as_override_enabled');
  }
  public set asOverrideEnabled(value: boolean | cdktf.IResolvable) {
    this._asOverrideEnabled = value;
  }
  public resetAsOverrideEnabled() {
    this._asOverrideEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOverrideEnabledInput() {
    return this._asOverrideEnabled;
  }

  // bgp_auth_key - computed: true, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // change - computed: true, optional: false, required: false
  private _change = new FabricRoutingProtocolChangeList(this, "change", true);
  public get change() {
    return this._change;
  }

  // change_log - computed: true, optional: false, required: false
  private _changeLog = new FabricRoutingProtocolChangeLogList(this, "change_log", true);
  public get changeLog() {
    return this._changeLog;
  }

  // connection_uuid - computed: false, optional: false, required: true
  private _connectionUuid?: string; 
  public get connectionUuid() {
    return this.getStringAttribute('connection_uuid');
  }
  public set connectionUuid(value: string) {
    this._connectionUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUuidInput() {
    return this._connectionUuid;
  }

  // customer_asn - computed: true, optional: true, required: false
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  public resetCustomerAsn() {
    this._customerAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // equinix_asn - computed: true, optional: false, required: false
  public get equinixAsn() {
    return this.getNumberAttribute('equinix_asn');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: true, optional: false, required: false
  private _operation = new FabricRoutingProtocolOperationList(this, "operation", true);
  public get operation() {
    return this._operation;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // bfd - computed: false, optional: true, required: false
  private _bfd = new FabricRoutingProtocolBfdList(this, "bfd", true);
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: FabricRoutingProtocolBfd[] | cdktf.IResolvable) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // bgp_ipv4 - computed: false, optional: true, required: false
  private _bgpIpv4 = new FabricRoutingProtocolBgpIpv4List(this, "bgp_ipv4", true);
  public get bgpIpv4() {
    return this._bgpIpv4;
  }
  public putBgpIpv4(value: FabricRoutingProtocolBgpIpv4[] | cdktf.IResolvable) {
    this._bgpIpv4.internalValue = value;
  }
  public resetBgpIpv4() {
    this._bgpIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv4Input() {
    return this._bgpIpv4.internalValue;
  }

  // bgp_ipv6 - computed: false, optional: true, required: false
  private _bgpIpv6 = new FabricRoutingProtocolBgpIpv6List(this, "bgp_ipv6", true);
  public get bgpIpv6() {
    return this._bgpIpv6;
  }
  public putBgpIpv6(value: FabricRoutingProtocolBgpIpv6[] | cdktf.IResolvable) {
    this._bgpIpv6.internalValue = value;
  }
  public resetBgpIpv6() {
    this._bgpIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpIpv6Input() {
    return this._bgpIpv6.internalValue;
  }

  // direct_ipv4 - computed: false, optional: true, required: false
  private _directIpv4 = new FabricRoutingProtocolDirectIpv4List(this, "direct_ipv4", true);
  public get directIpv4() {
    return this._directIpv4;
  }
  public putDirectIpv4(value: FabricRoutingProtocolDirectIpv4[] | cdktf.IResolvable) {
    this._directIpv4.internalValue = value;
  }
  public resetDirectIpv4() {
    this._directIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directIpv4Input() {
    return this._directIpv4.internalValue;
  }

  // direct_ipv6 - computed: false, optional: true, required: false
  private _directIpv6 = new FabricRoutingProtocolDirectIpv6List(this, "direct_ipv6", true);
  public get directIpv6() {
    return this._directIpv6;
  }
  public putDirectIpv6(value: FabricRoutingProtocolDirectIpv6[] | cdktf.IResolvable) {
    this._directIpv6.internalValue = value;
  }
  public resetDirectIpv6() {
    this._directIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directIpv6Input() {
    return this._directIpv6.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FabricRoutingProtocolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FabricRoutingProtocolTimeouts) {
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
      as_override_enabled: cdktf.booleanToTerraform(this._asOverrideEnabled),
      bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
      connection_uuid: cdktf.stringToTerraform(this._connectionUuid),
      customer_asn: cdktf.numberToTerraform(this._customerAsn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      bfd: cdktf.listMapper(fabricRoutingProtocolBfdToTerraform, true)(this._bfd.internalValue),
      bgp_ipv4: cdktf.listMapper(fabricRoutingProtocolBgpIpv4ToTerraform, true)(this._bgpIpv4.internalValue),
      bgp_ipv6: cdktf.listMapper(fabricRoutingProtocolBgpIpv6ToTerraform, true)(this._bgpIpv6.internalValue),
      direct_ipv4: cdktf.listMapper(fabricRoutingProtocolDirectIpv4ToTerraform, true)(this._directIpv4.internalValue),
      direct_ipv6: cdktf.listMapper(fabricRoutingProtocolDirectIpv6ToTerraform, true)(this._directIpv6.internalValue),
      timeouts: fabricRoutingProtocolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_override_enabled: {
        value: cdktf.booleanToHclTerraform(this._asOverrideEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_auth_key: {
        value: cdktf.stringToHclTerraform(this._bgpAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_uuid: {
        value: cdktf.stringToHclTerraform(this._connectionUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_asn: {
        value: cdktf.numberToHclTerraform(this._customerAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      bfd: {
        value: cdktf.listMapperHcl(fabricRoutingProtocolBfdToHclTerraform, true)(this._bfd.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricRoutingProtocolBfdList",
      },
      bgp_ipv4: {
        value: cdktf.listMapperHcl(fabricRoutingProtocolBgpIpv4ToHclTerraform, true)(this._bgpIpv4.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricRoutingProtocolBgpIpv4List",
      },
      bgp_ipv6: {
        value: cdktf.listMapperHcl(fabricRoutingProtocolBgpIpv6ToHclTerraform, true)(this._bgpIpv6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricRoutingProtocolBgpIpv6List",
      },
      direct_ipv4: {
        value: cdktf.listMapperHcl(fabricRoutingProtocolDirectIpv4ToHclTerraform, true)(this._directIpv4.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricRoutingProtocolDirectIpv4List",
      },
      direct_ipv6: {
        value: cdktf.listMapperHcl(fabricRoutingProtocolDirectIpv6ToHclTerraform, true)(this._directIpv6.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricRoutingProtocolDirectIpv6List",
      },
      timeouts: {
        value: fabricRoutingProtocolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FabricRoutingProtocolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
