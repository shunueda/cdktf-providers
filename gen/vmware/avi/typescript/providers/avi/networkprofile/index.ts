// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#connection_mirror Networkprofile#connection_mirror}
  */
  readonly connectionMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#description Networkprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#id Networkprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#name Networkprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#tenant_ref Networkprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#uuid Networkprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#configpb_attributes Networkprofile#configpb_attributes}
  */
  readonly configpbAttributes?: NetworkprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#markers Networkprofile#markers}
  */
  readonly markers?: NetworkprofileMarkers[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#profile Networkprofile#profile}
  */
  readonly profile: NetworkprofileProfile[] | cdktf.IResolvable;
}
export interface NetworkprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#version Networkprofile#version}
  */
  readonly version?: string;
}

export function networkprofileConfigpbAttributesToTerraform(struct?: NetworkprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function networkprofileConfigpbAttributesToHclTerraform(struct?: NetworkprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class NetworkprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileConfigpbAttributesOutputReference {
    return new NetworkprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#key Networkprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#values Networkprofile#values}
  */
  readonly values?: string[];
}

export function networkprofileMarkersToTerraform(struct?: NetworkprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkprofileMarkersToHclTerraform(struct?: NetworkprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileMarkersOutputReference {
    return new NetworkprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileSctpFastPathProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#enable_init_chunk_protection Networkprofile#enable_init_chunk_protection}
  */
  readonly enableInitChunkProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#idle_timeout Networkprofile#idle_timeout}
  */
  readonly idleTimeout?: string;
}

export function networkprofileProfileSctpFastPathProfileToTerraform(struct?: NetworkprofileProfileSctpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_init_chunk_protection: cdktf.stringToTerraform(struct!.enableInitChunkProtection),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function networkprofileProfileSctpFastPathProfileToHclTerraform(struct?: NetworkprofileProfileSctpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_init_chunk_protection: {
      value: cdktf.stringToHclTerraform(struct!.enableInitChunkProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileSctpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileSctpFastPathProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInitChunkProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInitChunkProtection = this._enableInitChunkProtection;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileSctpFastPathProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInitChunkProtection = undefined;
      this._idleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInitChunkProtection = value.enableInitChunkProtection;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // enable_init_chunk_protection - computed: false, optional: true, required: false
  private _enableInitChunkProtection?: string; 
  public get enableInitChunkProtection() {
    return this.getStringAttribute('enable_init_chunk_protection');
  }
  public set enableInitChunkProtection(value: string) {
    this._enableInitChunkProtection = value;
  }
  public resetEnableInitChunkProtection() {
    this._enableInitChunkProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInitChunkProtectionInput() {
    return this._enableInitChunkProtection;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}

export class NetworkprofileProfileSctpFastPathProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileSctpFastPathProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileSctpFastPathProfileOutputReference {
    return new NetworkprofileProfileSctpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileSctpProxyProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#cookie_expiration_timeout Networkprofile#cookie_expiration_timeout}
  */
  readonly cookieExpirationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#heartbeat_interval Networkprofile#heartbeat_interval}
  */
  readonly heartbeatInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#idle_timeout Networkprofile#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#max_retransmissions_association Networkprofile#max_retransmissions_association}
  */
  readonly maxRetransmissionsAssociation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#max_retransmissions_init_chunks Networkprofile#max_retransmissions_init_chunks}
  */
  readonly maxRetransmissionsInitChunks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#number_of_streams Networkprofile#number_of_streams}
  */
  readonly numberOfStreams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#receive_window Networkprofile#receive_window}
  */
  readonly receiveWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#reset_timeout Networkprofile#reset_timeout}
  */
  readonly resetTimeout?: string;
}

export function networkprofileProfileSctpProxyProfileToTerraform(struct?: NetworkprofileProfileSctpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiration_timeout: cdktf.stringToTerraform(struct!.cookieExpirationTimeout),
    heartbeat_interval: cdktf.stringToTerraform(struct!.heartbeatInterval),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_retransmissions_association: cdktf.stringToTerraform(struct!.maxRetransmissionsAssociation),
    max_retransmissions_init_chunks: cdktf.stringToTerraform(struct!.maxRetransmissionsInitChunks),
    number_of_streams: cdktf.stringToTerraform(struct!.numberOfStreams),
    receive_window: cdktf.stringToTerraform(struct!.receiveWindow),
    reset_timeout: cdktf.stringToTerraform(struct!.resetTimeout),
  }
}


export function networkprofileProfileSctpProxyProfileToHclTerraform(struct?: NetworkprofileProfileSctpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiration_timeout: {
      value: cdktf.stringToHclTerraform(struct!.cookieExpirationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heartbeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.heartbeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retransmissions_association: {
      value: cdktf.stringToHclTerraform(struct!.maxRetransmissionsAssociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retransmissions_init_chunks: {
      value: cdktf.stringToHclTerraform(struct!.maxRetransmissionsInitChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_streams: {
      value: cdktf.stringToHclTerraform(struct!.numberOfStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive_window: {
      value: cdktf.stringToHclTerraform(struct!.receiveWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resetTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileSctpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileSctpProxyProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpirationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpirationTimeout = this._cookieExpirationTimeout;
    }
    if (this._heartbeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.heartbeatInterval = this._heartbeatInterval;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxRetransmissionsAssociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetransmissionsAssociation = this._maxRetransmissionsAssociation;
    }
    if (this._maxRetransmissionsInitChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetransmissionsInitChunks = this._maxRetransmissionsInitChunks;
    }
    if (this._numberOfStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfStreams = this._numberOfStreams;
    }
    if (this._receiveWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveWindow = this._receiveWindow;
    }
    if (this._resetTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTimeout = this._resetTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileSctpProxyProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieExpirationTimeout = undefined;
      this._heartbeatInterval = undefined;
      this._idleTimeout = undefined;
      this._maxRetransmissionsAssociation = undefined;
      this._maxRetransmissionsInitChunks = undefined;
      this._numberOfStreams = undefined;
      this._receiveWindow = undefined;
      this._resetTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieExpirationTimeout = value.cookieExpirationTimeout;
      this._heartbeatInterval = value.heartbeatInterval;
      this._idleTimeout = value.idleTimeout;
      this._maxRetransmissionsAssociation = value.maxRetransmissionsAssociation;
      this._maxRetransmissionsInitChunks = value.maxRetransmissionsInitChunks;
      this._numberOfStreams = value.numberOfStreams;
      this._receiveWindow = value.receiveWindow;
      this._resetTimeout = value.resetTimeout;
    }
  }

  // cookie_expiration_timeout - computed: false, optional: true, required: false
  private _cookieExpirationTimeout?: string; 
  public get cookieExpirationTimeout() {
    return this.getStringAttribute('cookie_expiration_timeout');
  }
  public set cookieExpirationTimeout(value: string) {
    this._cookieExpirationTimeout = value;
  }
  public resetCookieExpirationTimeout() {
    this._cookieExpirationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpirationTimeoutInput() {
    return this._cookieExpirationTimeout;
  }

  // heartbeat_interval - computed: false, optional: true, required: false
  private _heartbeatInterval?: string; 
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: string) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_retransmissions_association - computed: false, optional: true, required: false
  private _maxRetransmissionsAssociation?: string; 
  public get maxRetransmissionsAssociation() {
    return this.getStringAttribute('max_retransmissions_association');
  }
  public set maxRetransmissionsAssociation(value: string) {
    this._maxRetransmissionsAssociation = value;
  }
  public resetMaxRetransmissionsAssociation() {
    this._maxRetransmissionsAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransmissionsAssociationInput() {
    return this._maxRetransmissionsAssociation;
  }

  // max_retransmissions_init_chunks - computed: false, optional: true, required: false
  private _maxRetransmissionsInitChunks?: string; 
  public get maxRetransmissionsInitChunks() {
    return this.getStringAttribute('max_retransmissions_init_chunks');
  }
  public set maxRetransmissionsInitChunks(value: string) {
    this._maxRetransmissionsInitChunks = value;
  }
  public resetMaxRetransmissionsInitChunks() {
    this._maxRetransmissionsInitChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransmissionsInitChunksInput() {
    return this._maxRetransmissionsInitChunks;
  }

  // number_of_streams - computed: false, optional: true, required: false
  private _numberOfStreams?: string; 
  public get numberOfStreams() {
    return this.getStringAttribute('number_of_streams');
  }
  public set numberOfStreams(value: string) {
    this._numberOfStreams = value;
  }
  public resetNumberOfStreams() {
    this._numberOfStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfStreamsInput() {
    return this._numberOfStreams;
  }

  // receive_window - computed: false, optional: true, required: false
  private _receiveWindow?: string; 
  public get receiveWindow() {
    return this.getStringAttribute('receive_window');
  }
  public set receiveWindow(value: string) {
    this._receiveWindow = value;
  }
  public resetReceiveWindow() {
    this._receiveWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowInput() {
    return this._receiveWindow;
  }

  // reset_timeout - computed: false, optional: true, required: false
  private _resetTimeout?: string; 
  public get resetTimeout() {
    return this.getStringAttribute('reset_timeout');
  }
  public set resetTimeout(value: string) {
    this._resetTimeout = value;
  }
  public resetResetTimeout() {
    this._resetTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeoutInput() {
    return this._resetTimeout;
  }
}

export class NetworkprofileProfileSctpProxyProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileSctpProxyProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileSctpProxyProfileOutputReference {
    return new NetworkprofileProfileSctpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileTcpFastPathProfileDsrProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_encap_type Networkprofile#dsr_encap_type}
  */
  readonly dsrEncapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_type Networkprofile#dsr_type}
  */
  readonly dsrType?: string;
}

export function networkprofileProfileTcpFastPathProfileDsrProfileToTerraform(struct?: NetworkprofileProfileTcpFastPathProfileDsrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsr_encap_type: cdktf.stringToTerraform(struct!.dsrEncapType),
    dsr_type: cdktf.stringToTerraform(struct!.dsrType),
  }
}


export function networkprofileProfileTcpFastPathProfileDsrProfileToHclTerraform(struct?: NetworkprofileProfileTcpFastPathProfileDsrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dsr_encap_type: {
      value: cdktf.stringToHclTerraform(struct!.dsrEncapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsr_type: {
      value: cdktf.stringToHclTerraform(struct!.dsrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileTcpFastPathProfileDsrProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsrEncapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrEncapType = this._dsrEncapType;
    }
    if (this._dsrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrType = this._dsrType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileTcpFastPathProfileDsrProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsrEncapType = undefined;
      this._dsrType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsrEncapType = value.dsrEncapType;
      this._dsrType = value.dsrType;
    }
  }

  // dsr_encap_type - computed: false, optional: true, required: false
  private _dsrEncapType?: string; 
  public get dsrEncapType() {
    return this.getStringAttribute('dsr_encap_type');
  }
  public set dsrEncapType(value: string) {
    this._dsrEncapType = value;
  }
  public resetDsrEncapType() {
    this._dsrEncapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrEncapTypeInput() {
    return this._dsrEncapType;
  }

  // dsr_type - computed: false, optional: true, required: false
  private _dsrType?: string; 
  public get dsrType() {
    return this.getStringAttribute('dsr_type');
  }
  public set dsrType(value: string) {
    this._dsrType = value;
  }
  public resetDsrType() {
    this._dsrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrTypeInput() {
    return this._dsrType;
  }
}

export class NetworkprofileProfileTcpFastPathProfileDsrProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileTcpFastPathProfileDsrProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference {
    return new NetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileTcpFastPathProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#enable_syn_protection Networkprofile#enable_syn_protection}
  */
  readonly enableSynProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#session_idle_timeout Networkprofile#session_idle_timeout}
  */
  readonly sessionIdleTimeout?: string;
  /**
  * dsr_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_profile Networkprofile#dsr_profile}
  */
  readonly dsrProfile?: NetworkprofileProfileTcpFastPathProfileDsrProfile[] | cdktf.IResolvable;
}

export function networkprofileProfileTcpFastPathProfileToTerraform(struct?: NetworkprofileProfileTcpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_syn_protection: cdktf.stringToTerraform(struct!.enableSynProtection),
    session_idle_timeout: cdktf.stringToTerraform(struct!.sessionIdleTimeout),
    dsr_profile: cdktf.listMapper(networkprofileProfileTcpFastPathProfileDsrProfileToTerraform, true)(struct!.dsrProfile),
  }
}


export function networkprofileProfileTcpFastPathProfileToHclTerraform(struct?: NetworkprofileProfileTcpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_syn_protection: {
      value: cdktf.stringToHclTerraform(struct!.enableSynProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsr_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileTcpFastPathProfileDsrProfileToHclTerraform, true)(struct!.dsrProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileTcpFastPathProfileDsrProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileTcpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileTcpFastPathProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSynProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSynProtection = this._enableSynProtection;
    }
    if (this._sessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdleTimeout = this._sessionIdleTimeout;
    }
    if (this._dsrProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrProfile = this._dsrProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileTcpFastPathProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableSynProtection = undefined;
      this._sessionIdleTimeout = undefined;
      this._dsrProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableSynProtection = value.enableSynProtection;
      this._sessionIdleTimeout = value.sessionIdleTimeout;
      this._dsrProfile.internalValue = value.dsrProfile;
    }
  }

  // enable_syn_protection - computed: false, optional: true, required: false
  private _enableSynProtection?: string; 
  public get enableSynProtection() {
    return this.getStringAttribute('enable_syn_protection');
  }
  public set enableSynProtection(value: string) {
    this._enableSynProtection = value;
  }
  public resetEnableSynProtection() {
    this._enableSynProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSynProtectionInput() {
    return this._enableSynProtection;
  }

  // session_idle_timeout - computed: false, optional: true, required: false
  private _sessionIdleTimeout?: string; 
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }
  public set sessionIdleTimeout(value: string) {
    this._sessionIdleTimeout = value;
  }
  public resetSessionIdleTimeout() {
    this._sessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleTimeoutInput() {
    return this._sessionIdleTimeout;
  }

  // dsr_profile - computed: false, optional: true, required: false
  private _dsrProfile = new NetworkprofileProfileTcpFastPathProfileDsrProfileList(this, "dsr_profile", true);
  public get dsrProfile() {
    return this._dsrProfile;
  }
  public putDsrProfile(value: NetworkprofileProfileTcpFastPathProfileDsrProfile[] | cdktf.IResolvable) {
    this._dsrProfile.internalValue = value;
  }
  public resetDsrProfile() {
    this._dsrProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrProfileInput() {
    return this._dsrProfile.internalValue;
  }
}

export class NetworkprofileProfileTcpFastPathProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileTcpFastPathProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileTcpFastPathProfileOutputReference {
    return new NetworkprofileProfileTcpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileTcpProxyProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#aggressive_congestion_avoidance Networkprofile#aggressive_congestion_avoidance}
  */
  readonly aggressiveCongestionAvoidance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#auto_window_growth Networkprofile#auto_window_growth}
  */
  readonly autoWindowGrowth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#automatic Networkprofile#automatic}
  */
  readonly automatic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#cc_algo Networkprofile#cc_algo}
  */
  readonly ccAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#congestion_recovery_scaling_factor Networkprofile#congestion_recovery_scaling_factor}
  */
  readonly congestionRecoveryScalingFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#delayed_ack_mode Networkprofile#delayed_ack_mode}
  */
  readonly delayedAckMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#idle_connection_timeout Networkprofile#idle_connection_timeout}
  */
  readonly idleConnectionTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#idle_connection_type Networkprofile#idle_connection_type}
  */
  readonly idleConnectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#ignore_time_wait Networkprofile#ignore_time_wait}
  */
  readonly ignoreTimeWait?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#ip_dscp Networkprofile#ip_dscp}
  */
  readonly ipDscp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#keepalive_in_halfclose_state Networkprofile#keepalive_in_halfclose_state}
  */
  readonly keepaliveInHalfcloseState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#max_retransmissions Networkprofile#max_retransmissions}
  */
  readonly maxRetransmissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#max_segment_size Networkprofile#max_segment_size}
  */
  readonly maxSegmentSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#max_syn_retransmissions Networkprofile#max_syn_retransmissions}
  */
  readonly maxSynRetransmissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#min_rexmt_timeout Networkprofile#min_rexmt_timeout}
  */
  readonly minRexmtTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#nagles_algorithm Networkprofile#nagles_algorithm}
  */
  readonly naglesAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#reassembly_queue_size Networkprofile#reassembly_queue_size}
  */
  readonly reassemblyQueueSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#receive_window Networkprofile#receive_window}
  */
  readonly receiveWindow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#reorder_threshold Networkprofile#reorder_threshold}
  */
  readonly reorderThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#slow_start_scaling_factor Networkprofile#slow_start_scaling_factor}
  */
  readonly slowStartScalingFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#time_wait_delay Networkprofile#time_wait_delay}
  */
  readonly timeWaitDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#use_interface_mtu Networkprofile#use_interface_mtu}
  */
  readonly useInterfaceMtu?: string;
}

export function networkprofileProfileTcpProxyProfileToTerraform(struct?: NetworkprofileProfileTcpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggressive_congestion_avoidance: cdktf.stringToTerraform(struct!.aggressiveCongestionAvoidance),
    auto_window_growth: cdktf.stringToTerraform(struct!.autoWindowGrowth),
    automatic: cdktf.stringToTerraform(struct!.automatic),
    cc_algo: cdktf.stringToTerraform(struct!.ccAlgo),
    congestion_recovery_scaling_factor: cdktf.stringToTerraform(struct!.congestionRecoveryScalingFactor),
    delayed_ack_mode: cdktf.stringToTerraform(struct!.delayedAckMode),
    idle_connection_timeout: cdktf.stringToTerraform(struct!.idleConnectionTimeout),
    idle_connection_type: cdktf.stringToTerraform(struct!.idleConnectionType),
    ignore_time_wait: cdktf.stringToTerraform(struct!.ignoreTimeWait),
    ip_dscp: cdktf.stringToTerraform(struct!.ipDscp),
    keepalive_in_halfclose_state: cdktf.stringToTerraform(struct!.keepaliveInHalfcloseState),
    max_retransmissions: cdktf.stringToTerraform(struct!.maxRetransmissions),
    max_segment_size: cdktf.stringToTerraform(struct!.maxSegmentSize),
    max_syn_retransmissions: cdktf.stringToTerraform(struct!.maxSynRetransmissions),
    min_rexmt_timeout: cdktf.stringToTerraform(struct!.minRexmtTimeout),
    nagles_algorithm: cdktf.stringToTerraform(struct!.naglesAlgorithm),
    reassembly_queue_size: cdktf.stringToTerraform(struct!.reassemblyQueueSize),
    receive_window: cdktf.stringToTerraform(struct!.receiveWindow),
    reorder_threshold: cdktf.stringToTerraform(struct!.reorderThreshold),
    slow_start_scaling_factor: cdktf.stringToTerraform(struct!.slowStartScalingFactor),
    time_wait_delay: cdktf.stringToTerraform(struct!.timeWaitDelay),
    use_interface_mtu: cdktf.stringToTerraform(struct!.useInterfaceMtu),
  }
}


export function networkprofileProfileTcpProxyProfileToHclTerraform(struct?: NetworkprofileProfileTcpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggressive_congestion_avoidance: {
      value: cdktf.stringToHclTerraform(struct!.aggressiveCongestionAvoidance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_window_growth: {
      value: cdktf.stringToHclTerraform(struct!.autoWindowGrowth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    automatic: {
      value: cdktf.stringToHclTerraform(struct!.automatic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cc_algo: {
      value: cdktf.stringToHclTerraform(struct!.ccAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    congestion_recovery_scaling_factor: {
      value: cdktf.stringToHclTerraform(struct!.congestionRecoveryScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delayed_ack_mode: {
      value: cdktf.stringToHclTerraform(struct!.delayedAckMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_connection_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleConnectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.idleConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_time_wait: {
      value: cdktf.stringToHclTerraform(struct!.ignoreTimeWait),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_dscp: {
      value: cdktf.stringToHclTerraform(struct!.ipDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_in_halfclose_state: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveInHalfcloseState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retransmissions: {
      value: cdktf.stringToHclTerraform(struct!.maxRetransmissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_segment_size: {
      value: cdktf.stringToHclTerraform(struct!.maxSegmentSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_syn_retransmissions: {
      value: cdktf.stringToHclTerraform(struct!.maxSynRetransmissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_rexmt_timeout: {
      value: cdktf.stringToHclTerraform(struct!.minRexmtTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nagles_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.naglesAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reassembly_queue_size: {
      value: cdktf.stringToHclTerraform(struct!.reassemblyQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive_window: {
      value: cdktf.stringToHclTerraform(struct!.receiveWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reorder_threshold: {
      value: cdktf.stringToHclTerraform(struct!.reorderThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slow_start_scaling_factor: {
      value: cdktf.stringToHclTerraform(struct!.slowStartScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_wait_delay: {
      value: cdktf.stringToHclTerraform(struct!.timeWaitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_interface_mtu: {
      value: cdktf.stringToHclTerraform(struct!.useInterfaceMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileTcpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileTcpProxyProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggressiveCongestionAvoidance !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggressiveCongestionAvoidance = this._aggressiveCongestionAvoidance;
    }
    if (this._autoWindowGrowth !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoWindowGrowth = this._autoWindowGrowth;
    }
    if (this._automatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.automatic = this._automatic;
    }
    if (this._ccAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccAlgo = this._ccAlgo;
    }
    if (this._congestionRecoveryScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.congestionRecoveryScalingFactor = this._congestionRecoveryScalingFactor;
    }
    if (this._delayedAckMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayedAckMode = this._delayedAckMode;
    }
    if (this._idleConnectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnectionTimeout = this._idleConnectionTimeout;
    }
    if (this._idleConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleConnectionType = this._idleConnectionType;
    }
    if (this._ignoreTimeWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTimeWait = this._ignoreTimeWait;
    }
    if (this._ipDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDscp = this._ipDscp;
    }
    if (this._keepaliveInHalfcloseState !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInHalfcloseState = this._keepaliveInHalfcloseState;
    }
    if (this._maxRetransmissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetransmissions = this._maxRetransmissions;
    }
    if (this._maxSegmentSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSegmentSize = this._maxSegmentSize;
    }
    if (this._maxSynRetransmissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSynRetransmissions = this._maxSynRetransmissions;
    }
    if (this._minRexmtTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRexmtTimeout = this._minRexmtTimeout;
    }
    if (this._naglesAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.naglesAlgorithm = this._naglesAlgorithm;
    }
    if (this._reassemblyQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassemblyQueueSize = this._reassemblyQueueSize;
    }
    if (this._receiveWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveWindow = this._receiveWindow;
    }
    if (this._reorderThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorderThreshold = this._reorderThreshold;
    }
    if (this._slowStartScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowStartScalingFactor = this._slowStartScalingFactor;
    }
    if (this._timeWaitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWaitDelay = this._timeWaitDelay;
    }
    if (this._useInterfaceMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInterfaceMtu = this._useInterfaceMtu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileTcpProxyProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggressiveCongestionAvoidance = undefined;
      this._autoWindowGrowth = undefined;
      this._automatic = undefined;
      this._ccAlgo = undefined;
      this._congestionRecoveryScalingFactor = undefined;
      this._delayedAckMode = undefined;
      this._idleConnectionTimeout = undefined;
      this._idleConnectionType = undefined;
      this._ignoreTimeWait = undefined;
      this._ipDscp = undefined;
      this._keepaliveInHalfcloseState = undefined;
      this._maxRetransmissions = undefined;
      this._maxSegmentSize = undefined;
      this._maxSynRetransmissions = undefined;
      this._minRexmtTimeout = undefined;
      this._naglesAlgorithm = undefined;
      this._reassemblyQueueSize = undefined;
      this._receiveWindow = undefined;
      this._reorderThreshold = undefined;
      this._slowStartScalingFactor = undefined;
      this._timeWaitDelay = undefined;
      this._useInterfaceMtu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggressiveCongestionAvoidance = value.aggressiveCongestionAvoidance;
      this._autoWindowGrowth = value.autoWindowGrowth;
      this._automatic = value.automatic;
      this._ccAlgo = value.ccAlgo;
      this._congestionRecoveryScalingFactor = value.congestionRecoveryScalingFactor;
      this._delayedAckMode = value.delayedAckMode;
      this._idleConnectionTimeout = value.idleConnectionTimeout;
      this._idleConnectionType = value.idleConnectionType;
      this._ignoreTimeWait = value.ignoreTimeWait;
      this._ipDscp = value.ipDscp;
      this._keepaliveInHalfcloseState = value.keepaliveInHalfcloseState;
      this._maxRetransmissions = value.maxRetransmissions;
      this._maxSegmentSize = value.maxSegmentSize;
      this._maxSynRetransmissions = value.maxSynRetransmissions;
      this._minRexmtTimeout = value.minRexmtTimeout;
      this._naglesAlgorithm = value.naglesAlgorithm;
      this._reassemblyQueueSize = value.reassemblyQueueSize;
      this._receiveWindow = value.receiveWindow;
      this._reorderThreshold = value.reorderThreshold;
      this._slowStartScalingFactor = value.slowStartScalingFactor;
      this._timeWaitDelay = value.timeWaitDelay;
      this._useInterfaceMtu = value.useInterfaceMtu;
    }
  }

  // aggressive_congestion_avoidance - computed: false, optional: true, required: false
  private _aggressiveCongestionAvoidance?: string; 
  public get aggressiveCongestionAvoidance() {
    return this.getStringAttribute('aggressive_congestion_avoidance');
  }
  public set aggressiveCongestionAvoidance(value: string) {
    this._aggressiveCongestionAvoidance = value;
  }
  public resetAggressiveCongestionAvoidance() {
    this._aggressiveCongestionAvoidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggressiveCongestionAvoidanceInput() {
    return this._aggressiveCongestionAvoidance;
  }

  // auto_window_growth - computed: false, optional: true, required: false
  private _autoWindowGrowth?: string; 
  public get autoWindowGrowth() {
    return this.getStringAttribute('auto_window_growth');
  }
  public set autoWindowGrowth(value: string) {
    this._autoWindowGrowth = value;
  }
  public resetAutoWindowGrowth() {
    this._autoWindowGrowth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoWindowGrowthInput() {
    return this._autoWindowGrowth;
  }

  // automatic - computed: false, optional: true, required: false
  private _automatic?: string; 
  public get automatic() {
    return this.getStringAttribute('automatic');
  }
  public set automatic(value: string) {
    this._automatic = value;
  }
  public resetAutomatic() {
    this._automatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticInput() {
    return this._automatic;
  }

  // cc_algo - computed: false, optional: true, required: false
  private _ccAlgo?: string; 
  public get ccAlgo() {
    return this.getStringAttribute('cc_algo');
  }
  public set ccAlgo(value: string) {
    this._ccAlgo = value;
  }
  public resetCcAlgo() {
    this._ccAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccAlgoInput() {
    return this._ccAlgo;
  }

  // congestion_recovery_scaling_factor - computed: false, optional: true, required: false
  private _congestionRecoveryScalingFactor?: string; 
  public get congestionRecoveryScalingFactor() {
    return this.getStringAttribute('congestion_recovery_scaling_factor');
  }
  public set congestionRecoveryScalingFactor(value: string) {
    this._congestionRecoveryScalingFactor = value;
  }
  public resetCongestionRecoveryScalingFactor() {
    this._congestionRecoveryScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get congestionRecoveryScalingFactorInput() {
    return this._congestionRecoveryScalingFactor;
  }

  // delayed_ack_mode - computed: true, optional: true, required: false
  private _delayedAckMode?: string; 
  public get delayedAckMode() {
    return this.getStringAttribute('delayed_ack_mode');
  }
  public set delayedAckMode(value: string) {
    this._delayedAckMode = value;
  }
  public resetDelayedAckMode() {
    this._delayedAckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayedAckModeInput() {
    return this._delayedAckMode;
  }

  // idle_connection_timeout - computed: false, optional: true, required: false
  private _idleConnectionTimeout?: string; 
  public get idleConnectionTimeout() {
    return this.getStringAttribute('idle_connection_timeout');
  }
  public set idleConnectionTimeout(value: string) {
    this._idleConnectionTimeout = value;
  }
  public resetIdleConnectionTimeout() {
    this._idleConnectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionTimeoutInput() {
    return this._idleConnectionTimeout;
  }

  // idle_connection_type - computed: false, optional: true, required: false
  private _idleConnectionType?: string; 
  public get idleConnectionType() {
    return this.getStringAttribute('idle_connection_type');
  }
  public set idleConnectionType(value: string) {
    this._idleConnectionType = value;
  }
  public resetIdleConnectionType() {
    this._idleConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleConnectionTypeInput() {
    return this._idleConnectionType;
  }

  // ignore_time_wait - computed: false, optional: true, required: false
  private _ignoreTimeWait?: string; 
  public get ignoreTimeWait() {
    return this.getStringAttribute('ignore_time_wait');
  }
  public set ignoreTimeWait(value: string) {
    this._ignoreTimeWait = value;
  }
  public resetIgnoreTimeWait() {
    this._ignoreTimeWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeWaitInput() {
    return this._ignoreTimeWait;
  }

  // ip_dscp - computed: false, optional: true, required: false
  private _ipDscp?: string; 
  public get ipDscp() {
    return this.getStringAttribute('ip_dscp');
  }
  public set ipDscp(value: string) {
    this._ipDscp = value;
  }
  public resetIpDscp() {
    this._ipDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpInput() {
    return this._ipDscp;
  }

  // keepalive_in_halfclose_state - computed: false, optional: true, required: false
  private _keepaliveInHalfcloseState?: string; 
  public get keepaliveInHalfcloseState() {
    return this.getStringAttribute('keepalive_in_halfclose_state');
  }
  public set keepaliveInHalfcloseState(value: string) {
    this._keepaliveInHalfcloseState = value;
  }
  public resetKeepaliveInHalfcloseState() {
    this._keepaliveInHalfcloseState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInHalfcloseStateInput() {
    return this._keepaliveInHalfcloseState;
  }

  // max_retransmissions - computed: false, optional: true, required: false
  private _maxRetransmissions?: string; 
  public get maxRetransmissions() {
    return this.getStringAttribute('max_retransmissions');
  }
  public set maxRetransmissions(value: string) {
    this._maxRetransmissions = value;
  }
  public resetMaxRetransmissions() {
    this._maxRetransmissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetransmissionsInput() {
    return this._maxRetransmissions;
  }

  // max_segment_size - computed: true, optional: true, required: false
  private _maxSegmentSize?: string; 
  public get maxSegmentSize() {
    return this.getStringAttribute('max_segment_size');
  }
  public set maxSegmentSize(value: string) {
    this._maxSegmentSize = value;
  }
  public resetMaxSegmentSize() {
    this._maxSegmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSegmentSizeInput() {
    return this._maxSegmentSize;
  }

  // max_syn_retransmissions - computed: false, optional: true, required: false
  private _maxSynRetransmissions?: string; 
  public get maxSynRetransmissions() {
    return this.getStringAttribute('max_syn_retransmissions');
  }
  public set maxSynRetransmissions(value: string) {
    this._maxSynRetransmissions = value;
  }
  public resetMaxSynRetransmissions() {
    this._maxSynRetransmissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSynRetransmissionsInput() {
    return this._maxSynRetransmissions;
  }

  // min_rexmt_timeout - computed: true, optional: true, required: false
  private _minRexmtTimeout?: string; 
  public get minRexmtTimeout() {
    return this.getStringAttribute('min_rexmt_timeout');
  }
  public set minRexmtTimeout(value: string) {
    this._minRexmtTimeout = value;
  }
  public resetMinRexmtTimeout() {
    this._minRexmtTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRexmtTimeoutInput() {
    return this._minRexmtTimeout;
  }

  // nagles_algorithm - computed: false, optional: true, required: false
  private _naglesAlgorithm?: string; 
  public get naglesAlgorithm() {
    return this.getStringAttribute('nagles_algorithm');
  }
  public set naglesAlgorithm(value: string) {
    this._naglesAlgorithm = value;
  }
  public resetNaglesAlgorithm() {
    this._naglesAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naglesAlgorithmInput() {
    return this._naglesAlgorithm;
  }

  // reassembly_queue_size - computed: false, optional: true, required: false
  private _reassemblyQueueSize?: string; 
  public get reassemblyQueueSize() {
    return this.getStringAttribute('reassembly_queue_size');
  }
  public set reassemblyQueueSize(value: string) {
    this._reassemblyQueueSize = value;
  }
  public resetReassemblyQueueSize() {
    this._reassemblyQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassemblyQueueSizeInput() {
    return this._reassemblyQueueSize;
  }

  // receive_window - computed: false, optional: true, required: false
  private _receiveWindow?: string; 
  public get receiveWindow() {
    return this.getStringAttribute('receive_window');
  }
  public set receiveWindow(value: string) {
    this._receiveWindow = value;
  }
  public resetReceiveWindow() {
    this._receiveWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWindowInput() {
    return this._receiveWindow;
  }

  // reorder_threshold - computed: true, optional: true, required: false
  private _reorderThreshold?: string; 
  public get reorderThreshold() {
    return this.getStringAttribute('reorder_threshold');
  }
  public set reorderThreshold(value: string) {
    this._reorderThreshold = value;
  }
  public resetReorderThreshold() {
    this._reorderThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderThresholdInput() {
    return this._reorderThreshold;
  }

  // slow_start_scaling_factor - computed: false, optional: true, required: false
  private _slowStartScalingFactor?: string; 
  public get slowStartScalingFactor() {
    return this.getStringAttribute('slow_start_scaling_factor');
  }
  public set slowStartScalingFactor(value: string) {
    this._slowStartScalingFactor = value;
  }
  public resetSlowStartScalingFactor() {
    this._slowStartScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowStartScalingFactorInput() {
    return this._slowStartScalingFactor;
  }

  // time_wait_delay - computed: false, optional: true, required: false
  private _timeWaitDelay?: string; 
  public get timeWaitDelay() {
    return this.getStringAttribute('time_wait_delay');
  }
  public set timeWaitDelay(value: string) {
    this._timeWaitDelay = value;
  }
  public resetTimeWaitDelay() {
    this._timeWaitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWaitDelayInput() {
    return this._timeWaitDelay;
  }

  // use_interface_mtu - computed: false, optional: true, required: false
  private _useInterfaceMtu?: string; 
  public get useInterfaceMtu() {
    return this.getStringAttribute('use_interface_mtu');
  }
  public set useInterfaceMtu(value: string) {
    this._useInterfaceMtu = value;
  }
  public resetUseInterfaceMtu() {
    this._useInterfaceMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInterfaceMtuInput() {
    return this._useInterfaceMtu;
  }
}

export class NetworkprofileProfileTcpProxyProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileTcpProxyProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileTcpProxyProfileOutputReference {
    return new NetworkprofileProfileTcpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileUdpFastPathProfileDsrProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_encap_type Networkprofile#dsr_encap_type}
  */
  readonly dsrEncapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_type Networkprofile#dsr_type}
  */
  readonly dsrType?: string;
}

export function networkprofileProfileUdpFastPathProfileDsrProfileToTerraform(struct?: NetworkprofileProfileUdpFastPathProfileDsrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dsr_encap_type: cdktf.stringToTerraform(struct!.dsrEncapType),
    dsr_type: cdktf.stringToTerraform(struct!.dsrType),
  }
}


export function networkprofileProfileUdpFastPathProfileDsrProfileToHclTerraform(struct?: NetworkprofileProfileUdpFastPathProfileDsrProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dsr_encap_type: {
      value: cdktf.stringToHclTerraform(struct!.dsrEncapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsr_type: {
      value: cdktf.stringToHclTerraform(struct!.dsrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileUdpFastPathProfileDsrProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsrEncapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrEncapType = this._dsrEncapType;
    }
    if (this._dsrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrType = this._dsrType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileUdpFastPathProfileDsrProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsrEncapType = undefined;
      this._dsrType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsrEncapType = value.dsrEncapType;
      this._dsrType = value.dsrType;
    }
  }

  // dsr_encap_type - computed: false, optional: true, required: false
  private _dsrEncapType?: string; 
  public get dsrEncapType() {
    return this.getStringAttribute('dsr_encap_type');
  }
  public set dsrEncapType(value: string) {
    this._dsrEncapType = value;
  }
  public resetDsrEncapType() {
    this._dsrEncapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrEncapTypeInput() {
    return this._dsrEncapType;
  }

  // dsr_type - computed: false, optional: true, required: false
  private _dsrType?: string; 
  public get dsrType() {
    return this.getStringAttribute('dsr_type');
  }
  public set dsrType(value: string) {
    this._dsrType = value;
  }
  public resetDsrType() {
    this._dsrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrTypeInput() {
    return this._dsrType;
  }
}

export class NetworkprofileProfileUdpFastPathProfileDsrProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileUdpFastPathProfileDsrProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference {
    return new NetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileUdpFastPathProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#per_pkt_loadbalance Networkprofile#per_pkt_loadbalance}
  */
  readonly perPktLoadbalance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#session_idle_timeout Networkprofile#session_idle_timeout}
  */
  readonly sessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#snat Networkprofile#snat}
  */
  readonly snat?: string;
  /**
  * dsr_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#dsr_profile Networkprofile#dsr_profile}
  */
  readonly dsrProfile?: NetworkprofileProfileUdpFastPathProfileDsrProfile[] | cdktf.IResolvable;
}

export function networkprofileProfileUdpFastPathProfileToTerraform(struct?: NetworkprofileProfileUdpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_pkt_loadbalance: cdktf.stringToTerraform(struct!.perPktLoadbalance),
    session_idle_timeout: cdktf.stringToTerraform(struct!.sessionIdleTimeout),
    snat: cdktf.stringToTerraform(struct!.snat),
    dsr_profile: cdktf.listMapper(networkprofileProfileUdpFastPathProfileDsrProfileToTerraform, true)(struct!.dsrProfile),
  }
}


export function networkprofileProfileUdpFastPathProfileToHclTerraform(struct?: NetworkprofileProfileUdpFastPathProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    per_pkt_loadbalance: {
      value: cdktf.stringToHclTerraform(struct!.perPktLoadbalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat: {
      value: cdktf.stringToHclTerraform(struct!.snat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsr_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileUdpFastPathProfileDsrProfileToHclTerraform, true)(struct!.dsrProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileUdpFastPathProfileDsrProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileUdpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileUdpFastPathProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perPktLoadbalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPktLoadbalance = this._perPktLoadbalance;
    }
    if (this._sessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdleTimeout = this._sessionIdleTimeout;
    }
    if (this._snat !== undefined) {
      hasAnyValues = true;
      internalValueResult.snat = this._snat;
    }
    if (this._dsrProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsrProfile = this._dsrProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileUdpFastPathProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._perPktLoadbalance = undefined;
      this._sessionIdleTimeout = undefined;
      this._snat = undefined;
      this._dsrProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._perPktLoadbalance = value.perPktLoadbalance;
      this._sessionIdleTimeout = value.sessionIdleTimeout;
      this._snat = value.snat;
      this._dsrProfile.internalValue = value.dsrProfile;
    }
  }

  // per_pkt_loadbalance - computed: false, optional: true, required: false
  private _perPktLoadbalance?: string; 
  public get perPktLoadbalance() {
    return this.getStringAttribute('per_pkt_loadbalance');
  }
  public set perPktLoadbalance(value: string) {
    this._perPktLoadbalance = value;
  }
  public resetPerPktLoadbalance() {
    this._perPktLoadbalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPktLoadbalanceInput() {
    return this._perPktLoadbalance;
  }

  // session_idle_timeout - computed: false, optional: true, required: false
  private _sessionIdleTimeout?: string; 
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }
  public set sessionIdleTimeout(value: string) {
    this._sessionIdleTimeout = value;
  }
  public resetSessionIdleTimeout() {
    this._sessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleTimeoutInput() {
    return this._sessionIdleTimeout;
  }

  // snat - computed: false, optional: true, required: false
  private _snat?: string; 
  public get snat() {
    return this.getStringAttribute('snat');
  }
  public set snat(value: string) {
    this._snat = value;
  }
  public resetSnat() {
    this._snat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat;
  }

  // dsr_profile - computed: false, optional: true, required: false
  private _dsrProfile = new NetworkprofileProfileUdpFastPathProfileDsrProfileList(this, "dsr_profile", true);
  public get dsrProfile() {
    return this._dsrProfile;
  }
  public putDsrProfile(value: NetworkprofileProfileUdpFastPathProfileDsrProfile[] | cdktf.IResolvable) {
    this._dsrProfile.internalValue = value;
  }
  public resetDsrProfile() {
    this._dsrProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrProfileInput() {
    return this._dsrProfile.internalValue;
  }
}

export class NetworkprofileProfileUdpFastPathProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileUdpFastPathProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileUdpFastPathProfileOutputReference {
    return new NetworkprofileProfileUdpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfileUdpProxyProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#session_idle_timeout Networkprofile#session_idle_timeout}
  */
  readonly sessionIdleTimeout?: string;
}

export function networkprofileProfileUdpProxyProfileToTerraform(struct?: NetworkprofileProfileUdpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_idle_timeout: cdktf.stringToTerraform(struct!.sessionIdleTimeout),
  }
}


export function networkprofileProfileUdpProxyProfileToHclTerraform(struct?: NetworkprofileProfileUdpProxyProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.sessionIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileUdpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfileUdpProxyProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdleTimeout = this._sessionIdleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfileUdpProxyProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionIdleTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionIdleTimeout = value.sessionIdleTimeout;
    }
  }

  // session_idle_timeout - computed: false, optional: true, required: false
  private _sessionIdleTimeout?: string; 
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }
  public set sessionIdleTimeout(value: string) {
    this._sessionIdleTimeout = value;
  }
  public resetSessionIdleTimeout() {
    this._sessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleTimeoutInput() {
    return this._sessionIdleTimeout;
  }
}

export class NetworkprofileProfileUdpProxyProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfileUdpProxyProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileUdpProxyProfileOutputReference {
    return new NetworkprofileProfileUdpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkprofileProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#type Networkprofile#type}
  */
  readonly type: string;
  /**
  * sctp_fast_path_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#sctp_fast_path_profile Networkprofile#sctp_fast_path_profile}
  */
  readonly sctpFastPathProfile?: NetworkprofileProfileSctpFastPathProfile[] | cdktf.IResolvable;
  /**
  * sctp_proxy_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#sctp_proxy_profile Networkprofile#sctp_proxy_profile}
  */
  readonly sctpProxyProfile?: NetworkprofileProfileSctpProxyProfile[] | cdktf.IResolvable;
  /**
  * tcp_fast_path_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#tcp_fast_path_profile Networkprofile#tcp_fast_path_profile}
  */
  readonly tcpFastPathProfile?: NetworkprofileProfileTcpFastPathProfile[] | cdktf.IResolvable;
  /**
  * tcp_proxy_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#tcp_proxy_profile Networkprofile#tcp_proxy_profile}
  */
  readonly tcpProxyProfile?: NetworkprofileProfileTcpProxyProfile[] | cdktf.IResolvable;
  /**
  * udp_fast_path_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#udp_fast_path_profile Networkprofile#udp_fast_path_profile}
  */
  readonly udpFastPathProfile?: NetworkprofileProfileUdpFastPathProfile[] | cdktf.IResolvable;
  /**
  * udp_proxy_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#udp_proxy_profile Networkprofile#udp_proxy_profile}
  */
  readonly udpProxyProfile?: NetworkprofileProfileUdpProxyProfile[] | cdktf.IResolvable;
}

export function networkprofileProfileToTerraform(struct?: NetworkprofileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    sctp_fast_path_profile: cdktf.listMapper(networkprofileProfileSctpFastPathProfileToTerraform, true)(struct!.sctpFastPathProfile),
    sctp_proxy_profile: cdktf.listMapper(networkprofileProfileSctpProxyProfileToTerraform, true)(struct!.sctpProxyProfile),
    tcp_fast_path_profile: cdktf.listMapper(networkprofileProfileTcpFastPathProfileToTerraform, true)(struct!.tcpFastPathProfile),
    tcp_proxy_profile: cdktf.listMapper(networkprofileProfileTcpProxyProfileToTerraform, true)(struct!.tcpProxyProfile),
    udp_fast_path_profile: cdktf.listMapper(networkprofileProfileUdpFastPathProfileToTerraform, true)(struct!.udpFastPathProfile),
    udp_proxy_profile: cdktf.listMapper(networkprofileProfileUdpProxyProfileToTerraform, true)(struct!.udpProxyProfile),
  }
}


export function networkprofileProfileToHclTerraform(struct?: NetworkprofileProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sctp_fast_path_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileSctpFastPathProfileToHclTerraform, true)(struct!.sctpFastPathProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileSctpFastPathProfileList",
    },
    sctp_proxy_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileSctpProxyProfileToHclTerraform, true)(struct!.sctpProxyProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileSctpProxyProfileList",
    },
    tcp_fast_path_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileTcpFastPathProfileToHclTerraform, true)(struct!.tcpFastPathProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileTcpFastPathProfileList",
    },
    tcp_proxy_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileTcpProxyProfileToHclTerraform, true)(struct!.tcpProxyProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileTcpProxyProfileList",
    },
    udp_fast_path_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileUdpFastPathProfileToHclTerraform, true)(struct!.udpFastPathProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileUdpFastPathProfileList",
    },
    udp_proxy_profile: {
      value: cdktf.listMapperHcl(networkprofileProfileUdpProxyProfileToHclTerraform, true)(struct!.udpProxyProfile),
      isBlock: true,
      type: "set",
      storageClassType: "NetworkprofileProfileUdpProxyProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkprofileProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkprofileProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._sctpFastPathProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpFastPathProfile = this._sctpFastPathProfile?.internalValue;
    }
    if (this._sctpProxyProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpProxyProfile = this._sctpProxyProfile?.internalValue;
    }
    if (this._tcpFastPathProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFastPathProfile = this._tcpFastPathProfile?.internalValue;
    }
    if (this._tcpProxyProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProxyProfile = this._tcpProxyProfile?.internalValue;
    }
    if (this._udpFastPathProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFastPathProfile = this._udpFastPathProfile?.internalValue;
    }
    if (this._udpProxyProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpProxyProfile = this._udpProxyProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkprofileProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._sctpFastPathProfile.internalValue = undefined;
      this._sctpProxyProfile.internalValue = undefined;
      this._tcpFastPathProfile.internalValue = undefined;
      this._tcpProxyProfile.internalValue = undefined;
      this._udpFastPathProfile.internalValue = undefined;
      this._udpProxyProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._sctpFastPathProfile.internalValue = value.sctpFastPathProfile;
      this._sctpProxyProfile.internalValue = value.sctpProxyProfile;
      this._tcpFastPathProfile.internalValue = value.tcpFastPathProfile;
      this._tcpProxyProfile.internalValue = value.tcpProxyProfile;
      this._udpFastPathProfile.internalValue = value.udpFastPathProfile;
      this._udpProxyProfile.internalValue = value.udpProxyProfile;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // sctp_fast_path_profile - computed: false, optional: true, required: false
  private _sctpFastPathProfile = new NetworkprofileProfileSctpFastPathProfileList(this, "sctp_fast_path_profile", true);
  public get sctpFastPathProfile() {
    return this._sctpFastPathProfile;
  }
  public putSctpFastPathProfile(value: NetworkprofileProfileSctpFastPathProfile[] | cdktf.IResolvable) {
    this._sctpFastPathProfile.internalValue = value;
  }
  public resetSctpFastPathProfile() {
    this._sctpFastPathProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpFastPathProfileInput() {
    return this._sctpFastPathProfile.internalValue;
  }

  // sctp_proxy_profile - computed: false, optional: true, required: false
  private _sctpProxyProfile = new NetworkprofileProfileSctpProxyProfileList(this, "sctp_proxy_profile", true);
  public get sctpProxyProfile() {
    return this._sctpProxyProfile;
  }
  public putSctpProxyProfile(value: NetworkprofileProfileSctpProxyProfile[] | cdktf.IResolvable) {
    this._sctpProxyProfile.internalValue = value;
  }
  public resetSctpProxyProfile() {
    this._sctpProxyProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpProxyProfileInput() {
    return this._sctpProxyProfile.internalValue;
  }

  // tcp_fast_path_profile - computed: false, optional: true, required: false
  private _tcpFastPathProfile = new NetworkprofileProfileTcpFastPathProfileList(this, "tcp_fast_path_profile", true);
  public get tcpFastPathProfile() {
    return this._tcpFastPathProfile;
  }
  public putTcpFastPathProfile(value: NetworkprofileProfileTcpFastPathProfile[] | cdktf.IResolvable) {
    this._tcpFastPathProfile.internalValue = value;
  }
  public resetTcpFastPathProfile() {
    this._tcpFastPathProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFastPathProfileInput() {
    return this._tcpFastPathProfile.internalValue;
  }

  // tcp_proxy_profile - computed: false, optional: true, required: false
  private _tcpProxyProfile = new NetworkprofileProfileTcpProxyProfileList(this, "tcp_proxy_profile", true);
  public get tcpProxyProfile() {
    return this._tcpProxyProfile;
  }
  public putTcpProxyProfile(value: NetworkprofileProfileTcpProxyProfile[] | cdktf.IResolvable) {
    this._tcpProxyProfile.internalValue = value;
  }
  public resetTcpProxyProfile() {
    this._tcpProxyProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProxyProfileInput() {
    return this._tcpProxyProfile.internalValue;
  }

  // udp_fast_path_profile - computed: false, optional: true, required: false
  private _udpFastPathProfile = new NetworkprofileProfileUdpFastPathProfileList(this, "udp_fast_path_profile", true);
  public get udpFastPathProfile() {
    return this._udpFastPathProfile;
  }
  public putUdpFastPathProfile(value: NetworkprofileProfileUdpFastPathProfile[] | cdktf.IResolvable) {
    this._udpFastPathProfile.internalValue = value;
  }
  public resetUdpFastPathProfile() {
    this._udpFastPathProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFastPathProfileInput() {
    return this._udpFastPathProfile.internalValue;
  }

  // udp_proxy_profile - computed: false, optional: true, required: false
  private _udpProxyProfile = new NetworkprofileProfileUdpProxyProfileList(this, "udp_proxy_profile", true);
  public get udpProxyProfile() {
    return this._udpProxyProfile;
  }
  public putUdpProxyProfile(value: NetworkprofileProfileUdpProxyProfile[] | cdktf.IResolvable) {
    this._udpProxyProfile.internalValue = value;
  }
  public resetUdpProxyProfile() {
    this._udpProxyProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpProxyProfileInput() {
    return this._udpProxyProfile.internalValue;
  }
}

export class NetworkprofileProfileList extends cdktf.ComplexList {
  public internalValue? : NetworkprofileProfile[] | cdktf.IResolvable

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
  public get(index: number): NetworkprofileProfileOutputReference {
    return new NetworkprofileProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile avi_networkprofile}
*/
export class Networkprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_networkprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Networkprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Networkprofile to import
  * @param importFromId The id of the existing Networkprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Networkprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_networkprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/networkprofile avi_networkprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkprofileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_networkprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionMirror = config.connectionMirror;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._profile.internalValue = config.profile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_mirror - computed: false, optional: true, required: false
  private _connectionMirror?: string; 
  public get connectionMirror() {
    return this.getStringAttribute('connection_mirror');
  }
  public set connectionMirror(value: string) {
    this._connectionMirror = value;
  }
  public resetConnectionMirror() {
    this._connectionMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionMirrorInput() {
    return this._connectionMirror;
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new NetworkprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: NetworkprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new NetworkprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: NetworkprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // profile - computed: false, optional: false, required: true
  private _profile = new NetworkprofileProfileList(this, "profile", true);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: NetworkprofileProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_mirror: cdktf.stringToTerraform(this._connectionMirror),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(networkprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(networkprofileMarkersToTerraform, true)(this._markers.internalValue),
      profile: cdktf.listMapper(networkprofileProfileToTerraform, true)(this._profile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_mirror: {
        value: cdktf.stringToHclTerraform(this._connectionMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(networkprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkprofileConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(networkprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkprofileMarkersList",
      },
      profile: {
        value: cdktf.listMapperHcl(networkprofileProfileToHclTerraform, true)(this._profile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkprofileProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
