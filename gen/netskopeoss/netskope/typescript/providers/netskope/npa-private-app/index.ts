// https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NpaPrivateAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#allow_unauthenticated_cors NpaPrivateApp#allow_unauthenticated_cors}
  */
  readonly allowUnauthenticatedCors?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#allow_uri_bypass NpaPrivateApp#allow_uri_bypass}
  */
  readonly allowUriBypass?: boolean | cdktf.IResolvable;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#app_name NpaPrivateApp#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#app_option NpaPrivateApp#app_option}
  */
  readonly appOption?: NpaPrivateAppAppOption;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#bypass_uris NpaPrivateApp#bypass_uris}
  */
  readonly bypassUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#clientless_access NpaPrivateApp#clientless_access}
  */
  readonly clientlessAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#is_user_portal_app NpaPrivateApp#is_user_portal_app}
  */
  readonly isUserPortalApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#private_app_hostname NpaPrivateApp#private_app_hostname}
  */
  readonly privateAppHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#protocols NpaPrivateApp#protocols}
  */
  readonly protocols?: NpaPrivateAppProtocols[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#publishers NpaPrivateApp#publishers}
  */
  readonly publishers?: NpaPrivateAppPublishers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#real_host NpaPrivateApp#real_host}
  */
  readonly realHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#tags NpaPrivateApp#tags}
  */
  readonly tags?: NpaPrivateAppTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#trust_self_signed_certs NpaPrivateApp#trust_self_signed_certs}
  */
  readonly trustSelfSignedCerts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#uribypass_header_value NpaPrivateApp#uribypass_header_value}
  */
  readonly uribypassHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#use_publisher_dns NpaPrivateApp#use_publisher_dns}
  */
  readonly usePublisherDns?: boolean | cdktf.IResolvable;
}
export interface NpaPrivateAppAppOption {
}

export function npaPrivateAppAppOptionToTerraform(struct?: NpaPrivateAppAppOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPrivateAppAppOptionToHclTerraform(struct?: NpaPrivateAppAppOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPrivateAppAppOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPrivateAppAppOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppAppOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface NpaPrivateAppProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#port NpaPrivateApp#port}
  */
  readonly port?: string;
  /**
  * must be one of ["tcp", "udp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#protocol NpaPrivateApp#protocol}
  */
  readonly protocol?: string;
}

export function npaPrivateAppProtocolsToTerraform(struct?: NpaPrivateAppProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function npaPrivateAppProtocolsToHclTerraform(struct?: NpaPrivateAppProtocols | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPrivateAppProtocolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPrivateAppProtocols | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppProtocols | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class NpaPrivateAppProtocolsList extends cdktf.ComplexList {
  public internalValue? : NpaPrivateAppProtocols[] | cdktf.IResolvable

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
  public get(index: number): NpaPrivateAppProtocolsOutputReference {
    return new NpaPrivateAppProtocolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaPrivateAppPublishers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#publisher_id NpaPrivateApp#publisher_id}
  */
  readonly publisherId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#publisher_name NpaPrivateApp#publisher_name}
  */
  readonly publisherName?: string;
}

export function npaPrivateAppPublishersToTerraform(struct?: NpaPrivateAppPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publisher_id: cdktf.stringToTerraform(struct!.publisherId),
    publisher_name: cdktf.stringToTerraform(struct!.publisherName),
  }
}


export function npaPrivateAppPublishersToHclTerraform(struct?: NpaPrivateAppPublishers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    publisher_id: {
      value: cdktf.stringToHclTerraform(struct!.publisherId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher_name: {
      value: cdktf.stringToHclTerraform(struct!.publisherName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPrivateAppPublishersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPrivateAppPublishers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publisherId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherId = this._publisherId;
    }
    if (this._publisherName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherName = this._publisherName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppPublishers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._publisherId = undefined;
      this._publisherName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._publisherId = value.publisherId;
      this._publisherName = value.publisherName;
    }
  }

  // publisher_id - computed: false, optional: true, required: false
  private _publisherId?: string; 
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }
  public set publisherId(value: string) {
    this._publisherId = value;
  }
  public resetPublisherId() {
    this._publisherId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
  }

  // publisher_name - computed: false, optional: true, required: false
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  public resetPublisherName() {
    this._publisherName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
  }
}

export class NpaPrivateAppPublishersList extends cdktf.ComplexList {
  public internalValue? : NpaPrivateAppPublishers[] | cdktf.IResolvable

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
  public get(index: number): NpaPrivateAppPublishersOutputReference {
    return new NpaPrivateAppPublishersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaPrivateAppReachability {
}

export function npaPrivateAppReachabilityToTerraform(struct?: NpaPrivateAppReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPrivateAppReachabilityToHclTerraform(struct?: NpaPrivateAppReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPrivateAppReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPrivateAppReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppReachability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_string - computed: true, optional: false, required: false
  public get errorString() {
    return this.getStringAttribute('error_string');
  }

  // reachable - computed: true, optional: false, required: false
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }
}
export interface NpaPrivateAppServicePublisherAssignmentsReachability {
}

export function npaPrivateAppServicePublisherAssignmentsReachabilityToTerraform(struct?: NpaPrivateAppServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPrivateAppServicePublisherAssignmentsReachabilityToHclTerraform(struct?: NpaPrivateAppServicePublisherAssignmentsReachability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPrivateAppServicePublisherAssignmentsReachabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NpaPrivateAppServicePublisherAssignmentsReachability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppServicePublisherAssignmentsReachability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_string - computed: true, optional: false, required: false
  public get errorString() {
    return this.getStringAttribute('error_string');
  }

  // reachable - computed: true, optional: false, required: false
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }
}
export interface NpaPrivateAppServicePublisherAssignments {
}

export function npaPrivateAppServicePublisherAssignmentsToTerraform(struct?: NpaPrivateAppServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function npaPrivateAppServicePublisherAssignmentsToHclTerraform(struct?: NpaPrivateAppServicePublisherAssignments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NpaPrivateAppServicePublisherAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPrivateAppServicePublisherAssignments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppServicePublisherAssignments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // publisher_id - computed: true, optional: false, required: false
  public get publisherId() {
    return this.getNumberAttribute('publisher_id');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new NpaPrivateAppServicePublisherAssignmentsReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
}

export class NpaPrivateAppServicePublisherAssignmentsList extends cdktf.ComplexList {

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
  public get(index: number): NpaPrivateAppServicePublisherAssignmentsOutputReference {
    return new NpaPrivateAppServicePublisherAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NpaPrivateAppTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#tag_name NpaPrivateApp#tag_name}
  */
  readonly tagName?: string;
}

export function npaPrivateAppTagsToTerraform(struct?: NpaPrivateAppTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function npaPrivateAppTagsToHclTerraform(struct?: NpaPrivateAppTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NpaPrivateAppTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NpaPrivateAppTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NpaPrivateAppTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}

export class NpaPrivateAppTagsList extends cdktf.ComplexList {
  public internalValue? : NpaPrivateAppTags[] | cdktf.IResolvable

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
  public get(index: number): NpaPrivateAppTagsOutputReference {
    return new NpaPrivateAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app netskope_npa_private_app}
*/
export class NpaPrivateApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskope_npa_private_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NpaPrivateApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NpaPrivateApp to import
  * @param importFromId The id of the existing NpaPrivateApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NpaPrivateApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskope_npa_private_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskope/0.3.2/docs/resources/npa_private_app netskope_npa_private_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NpaPrivateAppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NpaPrivateAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netskope_npa_private_app',
      terraformGeneratorMetadata: {
        providerName: 'netskope',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUnauthenticatedCors = config.allowUnauthenticatedCors;
    this._allowUriBypass = config.allowUriBypass;
    this._appName = config.appName;
    this._appOption.internalValue = config.appOption;
    this._bypassUris = config.bypassUris;
    this._clientlessAccess = config.clientlessAccess;
    this._isUserPortalApp = config.isUserPortalApp;
    this._privateAppHostname = config.privateAppHostname;
    this._protocols.internalValue = config.protocols;
    this._publishers.internalValue = config.publishers;
    this._realHost = config.realHost;
    this._tags.internalValue = config.tags;
    this._trustSelfSignedCerts = config.trustSelfSignedCerts;
    this._uribypassHeaderValue = config.uribypassHeaderValue;
    this._usePublisherDns = config.usePublisherDns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_unauthenticated_cors - computed: true, optional: true, required: false
  private _allowUnauthenticatedCors?: boolean | cdktf.IResolvable; 
  public get allowUnauthenticatedCors() {
    return this.getBooleanAttribute('allow_unauthenticated_cors');
  }
  public set allowUnauthenticatedCors(value: boolean | cdktf.IResolvable) {
    this._allowUnauthenticatedCors = value;
  }
  public resetAllowUnauthenticatedCors() {
    this._allowUnauthenticatedCors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnauthenticatedCorsInput() {
    return this._allowUnauthenticatedCors;
  }

  // allow_uri_bypass - computed: true, optional: true, required: false
  private _allowUriBypass?: boolean | cdktf.IResolvable; 
  public get allowUriBypass() {
    return this.getBooleanAttribute('allow_uri_bypass');
  }
  public set allowUriBypass(value: boolean | cdktf.IResolvable) {
    this._allowUriBypass = value;
  }
  public resetAllowUriBypass() {
    this._allowUriBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUriBypassInput() {
    return this._allowUriBypass;
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // app_option - computed: true, optional: true, required: false
  private _appOption = new NpaPrivateAppAppOptionOutputReference(this, "app_option");
  public get appOption() {
    return this._appOption;
  }
  public putAppOption(value: NpaPrivateAppAppOption) {
    this._appOption.internalValue = value;
  }
  public resetAppOption() {
    this._appOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appOptionInput() {
    return this._appOption.internalValue;
  }

  // bypass_uris - computed: true, optional: true, required: false
  private _bypassUris?: string[]; 
  public get bypassUris() {
    return this.getListAttribute('bypass_uris');
  }
  public set bypassUris(value: string[]) {
    this._bypassUris = value;
  }
  public resetBypassUris() {
    this._bypassUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassUrisInput() {
    return this._bypassUris;
  }

  // clientless_access - computed: true, optional: true, required: false
  private _clientlessAccess?: boolean | cdktf.IResolvable; 
  public get clientlessAccess() {
    return this.getBooleanAttribute('clientless_access');
  }
  public set clientlessAccess(value: boolean | cdktf.IResolvable) {
    this._clientlessAccess = value;
  }
  public resetClientlessAccess() {
    this._clientlessAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientlessAccessInput() {
    return this._clientlessAccess;
  }

  // is_user_portal_app - computed: true, optional: true, required: false
  private _isUserPortalApp?: boolean | cdktf.IResolvable; 
  public get isUserPortalApp() {
    return this.getBooleanAttribute('is_user_portal_app');
  }
  public set isUserPortalApp(value: boolean | cdktf.IResolvable) {
    this._isUserPortalApp = value;
  }
  public resetIsUserPortalApp() {
    this._isUserPortalApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUserPortalAppInput() {
    return this._isUserPortalApp;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // private_app_hostname - computed: true, optional: true, required: false
  private _privateAppHostname?: string; 
  public get privateAppHostname() {
    return this.getStringAttribute('private_app_hostname');
  }
  public set privateAppHostname(value: string) {
    this._privateAppHostname = value;
  }
  public resetPrivateAppHostname() {
    this._privateAppHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAppHostnameInput() {
    return this._privateAppHostname;
  }

  // private_app_id - computed: true, optional: false, required: false
  public get privateAppId() {
    return this.getNumberAttribute('private_app_id');
  }

  // private_app_name - computed: true, optional: false, required: false
  public get privateAppName() {
    return this.getStringAttribute('private_app_name');
  }

  // private_app_protocol - computed: true, optional: false, required: false
  public get privateAppProtocol() {
    return this.getStringAttribute('private_app_protocol');
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols = new NpaPrivateAppProtocolsList(this, "protocols", false);
  public get protocols() {
    return this._protocols;
  }
  public putProtocols(value: NpaPrivateAppProtocols[] | cdktf.IResolvable) {
    this._protocols.internalValue = value;
  }
  public resetProtocols() {
    this._protocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols.internalValue;
  }

  // public_host - computed: true, optional: false, required: false
  public get publicHost() {
    return this.getStringAttribute('public_host');
  }

  // publishers - computed: false, optional: true, required: false
  private _publishers = new NpaPrivateAppPublishersList(this, "publishers", false);
  public get publishers() {
    return this._publishers;
  }
  public putPublishers(value: NpaPrivateAppPublishers[] | cdktf.IResolvable) {
    this._publishers.internalValue = value;
  }
  public resetPublishers() {
    this._publishers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishersInput() {
    return this._publishers.internalValue;
  }

  // reachability - computed: true, optional: false, required: false
  private _reachability = new NpaPrivateAppReachabilityOutputReference(this, "reachability");
  public get reachability() {
    return this._reachability;
  }

  // real_host - computed: true, optional: true, required: false
  private _realHost?: string; 
  public get realHost() {
    return this.getStringAttribute('real_host');
  }
  public set realHost(value: string) {
    this._realHost = value;
  }
  public resetRealHost() {
    this._realHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realHostInput() {
    return this._realHost;
  }

  // service_publisher_assignments - computed: true, optional: false, required: false
  private _servicePublisherAssignments = new NpaPrivateAppServicePublisherAssignmentsList(this, "service_publisher_assignments", false);
  public get servicePublisherAssignments() {
    return this._servicePublisherAssignments;
  }

  // steering_configs - computed: true, optional: false, required: false
  public get steeringConfigs() {
    return this.getListAttribute('steering_configs');
  }

  // supplement_dns_for_osx - computed: true, optional: false, required: false
  public get supplementDnsForOsx() {
    return this.getBooleanAttribute('supplement_dns_for_osx');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new NpaPrivateAppTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NpaPrivateAppTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // trust_self_signed_certs - computed: true, optional: true, required: false
  private _trustSelfSignedCerts?: boolean | cdktf.IResolvable; 
  public get trustSelfSignedCerts() {
    return this.getBooleanAttribute('trust_self_signed_certs');
  }
  public set trustSelfSignedCerts(value: boolean | cdktf.IResolvable) {
    this._trustSelfSignedCerts = value;
  }
  public resetTrustSelfSignedCerts() {
    this._trustSelfSignedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustSelfSignedCertsInput() {
    return this._trustSelfSignedCerts;
  }

  // uribypass_header_value - computed: true, optional: true, required: false
  private _uribypassHeaderValue?: string; 
  public get uribypassHeaderValue() {
    return this.getStringAttribute('uribypass_header_value');
  }
  public set uribypassHeaderValue(value: string) {
    this._uribypassHeaderValue = value;
  }
  public resetUribypassHeaderValue() {
    this._uribypassHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uribypassHeaderValueInput() {
    return this._uribypassHeaderValue;
  }

  // use_publisher_dns - computed: true, optional: true, required: false
  private _usePublisherDns?: boolean | cdktf.IResolvable; 
  public get usePublisherDns() {
    return this.getBooleanAttribute('use_publisher_dns');
  }
  public set usePublisherDns(value: boolean | cdktf.IResolvable) {
    this._usePublisherDns = value;
  }
  public resetUsePublisherDns() {
    this._usePublisherDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublisherDnsInput() {
    return this._usePublisherDns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unauthenticated_cors: cdktf.booleanToTerraform(this._allowUnauthenticatedCors),
      allow_uri_bypass: cdktf.booleanToTerraform(this._allowUriBypass),
      app_name: cdktf.stringToTerraform(this._appName),
      app_option: npaPrivateAppAppOptionToTerraform(this._appOption.internalValue),
      bypass_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bypassUris),
      clientless_access: cdktf.booleanToTerraform(this._clientlessAccess),
      is_user_portal_app: cdktf.booleanToTerraform(this._isUserPortalApp),
      private_app_hostname: cdktf.stringToTerraform(this._privateAppHostname),
      protocols: cdktf.listMapper(npaPrivateAppProtocolsToTerraform, false)(this._protocols.internalValue),
      publishers: cdktf.listMapper(npaPrivateAppPublishersToTerraform, false)(this._publishers.internalValue),
      real_host: cdktf.stringToTerraform(this._realHost),
      tags: cdktf.listMapper(npaPrivateAppTagsToTerraform, false)(this._tags.internalValue),
      trust_self_signed_certs: cdktf.booleanToTerraform(this._trustSelfSignedCerts),
      uribypass_header_value: cdktf.stringToTerraform(this._uribypassHeaderValue),
      use_publisher_dns: cdktf.booleanToTerraform(this._usePublisherDns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unauthenticated_cors: {
        value: cdktf.booleanToHclTerraform(this._allowUnauthenticatedCors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_uri_bypass: {
        value: cdktf.booleanToHclTerraform(this._allowUriBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_option: {
        value: npaPrivateAppAppOptionToHclTerraform(this._appOption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NpaPrivateAppAppOption",
      },
      bypass_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bypassUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clientless_access: {
        value: cdktf.booleanToHclTerraform(this._clientlessAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_user_portal_app: {
        value: cdktf.booleanToHclTerraform(this._isUserPortalApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_app_hostname: {
        value: cdktf.stringToHclTerraform(this._privateAppHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(npaPrivateAppProtocolsToHclTerraform, false)(this._protocols.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NpaPrivateAppProtocolsList",
      },
      publishers: {
        value: cdktf.listMapperHcl(npaPrivateAppPublishersToHclTerraform, false)(this._publishers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NpaPrivateAppPublishersList",
      },
      real_host: {
        value: cdktf.stringToHclTerraform(this._realHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(npaPrivateAppTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NpaPrivateAppTagsList",
      },
      trust_self_signed_certs: {
        value: cdktf.booleanToHclTerraform(this._trustSelfSignedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uribypass_header_value: {
        value: cdktf.stringToHclTerraform(this._uribypassHeaderValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_publisher_dns: {
        value: cdktf.booleanToHclTerraform(this._usePublisherDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
