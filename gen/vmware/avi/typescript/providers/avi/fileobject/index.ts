// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FileobjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#checksum Fileobject#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#child_refs Fileobject#child_refs}
  */
  readonly childRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#compressed Fileobject#compressed}
  */
  readonly compressed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#created Fileobject#created}
  */
  readonly created?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#description Fileobject#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#expires_at Fileobject#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#gslb_geodb_format Fileobject#gslb_geodb_format}
  */
  readonly gslbGeodbFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#has_parent Fileobject#has_parent}
  */
  readonly hasParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#id Fileobject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#is_federated Fileobject#is_federated}
  */
  readonly isFederated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#name Fileobject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#path Fileobject#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#read_only Fileobject#read_only}
  */
  readonly readOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#restrict_download Fileobject#restrict_download}
  */
  readonly restrictDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#size Fileobject#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#tenant_ref Fileobject#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#type Fileobject#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#uuid Fileobject#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#version Fileobject#version}
  */
  readonly version?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#configpb_attributes Fileobject#configpb_attributes}
  */
  readonly configpbAttributes?: FileobjectConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * crl_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#crl_info Fileobject#crl_info}
  */
  readonly crlInfo?: FileobjectCrlInfo[] | cdktf.IResolvable;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#events Fileobject#events}
  */
  readonly events?: FileobjectEvents[] | cdktf.IResolvable;
}
export interface FileobjectConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#version Fileobject#version}
  */
  readonly version?: string;
}

export function fileobjectConfigpbAttributesToTerraform(struct?: FileobjectConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fileobjectConfigpbAttributesToHclTerraform(struct?: FileobjectConfigpbAttributes | cdktf.IResolvable): any {
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

export class FileobjectConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileobjectConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FileobjectConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class FileobjectConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : FileobjectConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): FileobjectConfigpbAttributesOutputReference {
    return new FileobjectConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileobjectCrlInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#common_name Fileobject#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#distinguished_name Fileobject#distinguished_name}
  */
  readonly distinguishedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#etag Fileobject#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#fingerprint Fileobject#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#last_refreshed Fileobject#last_refreshed}
  */
  readonly lastRefreshed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#last_update Fileobject#last_update}
  */
  readonly lastUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#next_update Fileobject#next_update}
  */
  readonly nextUpdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#server_url Fileobject#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#text Fileobject#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#update_interval Fileobject#update_interval}
  */
  readonly updateInterval?: string;
}

export function fileobjectCrlInfoToTerraform(struct?: FileobjectCrlInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    distinguished_name: cdktf.stringToTerraform(struct!.distinguishedName),
    etag: cdktf.stringToTerraform(struct!.etag),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    last_refreshed: cdktf.stringToTerraform(struct!.lastRefreshed),
    last_update: cdktf.stringToTerraform(struct!.lastUpdate),
    next_update: cdktf.stringToTerraform(struct!.nextUpdate),
    server_url: cdktf.stringToTerraform(struct!.serverUrl),
    text: cdktf.stringToTerraform(struct!.text),
    update_interval: cdktf.stringToTerraform(struct!.updateInterval),
  }
}


export function fileobjectCrlInfoToHclTerraform(struct?: FileobjectCrlInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    distinguished_name: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_refreshed: {
      value: cdktf.stringToHclTerraform(struct!.lastRefreshed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_update: {
      value: cdktf.stringToHclTerraform(struct!.lastUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_update: {
      value: cdktf.stringToHclTerraform(struct!.nextUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_url: {
      value: cdktf.stringToHclTerraform(struct!.serverUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_interval: {
      value: cdktf.stringToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileobjectCrlInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileobjectCrlInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._distinguishedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedName = this._distinguishedName;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._lastRefreshed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRefreshed = this._lastRefreshed;
    }
    if (this._lastUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastUpdate = this._lastUpdate;
    }
    if (this._nextUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextUpdate = this._nextUpdate;
    }
    if (this._serverUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrl = this._serverUrl;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileobjectCrlInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._distinguishedName = undefined;
      this._etag = undefined;
      this._fingerprint = undefined;
      this._lastRefreshed = undefined;
      this._lastUpdate = undefined;
      this._nextUpdate = undefined;
      this._serverUrl = undefined;
      this._text = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._distinguishedName = value.distinguishedName;
      this._etag = value.etag;
      this._fingerprint = value.fingerprint;
      this._lastRefreshed = value.lastRefreshed;
      this._lastUpdate = value.lastUpdate;
      this._nextUpdate = value.nextUpdate;
      this._serverUrl = value.serverUrl;
      this._text = value.text;
      this._updateInterval = value.updateInterval;
    }
  }

  // common_name - computed: true, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // distinguished_name - computed: true, optional: true, required: false
  private _distinguishedName?: string; 
  public get distinguishedName() {
    return this.getStringAttribute('distinguished_name');
  }
  public set distinguishedName(value: string) {
    this._distinguishedName = value;
  }
  public resetDistinguishedName() {
    this._distinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameInput() {
    return this._distinguishedName;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // fingerprint - computed: true, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // last_refreshed - computed: true, optional: true, required: false
  private _lastRefreshed?: string; 
  public get lastRefreshed() {
    return this.getStringAttribute('last_refreshed');
  }
  public set lastRefreshed(value: string) {
    this._lastRefreshed = value;
  }
  public resetLastRefreshed() {
    this._lastRefreshed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRefreshedInput() {
    return this._lastRefreshed;
  }

  // last_update - computed: true, optional: true, required: false
  private _lastUpdate?: string; 
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }
  public set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
  public resetLastUpdate() {
    this._lastUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateInput() {
    return this._lastUpdate;
  }

  // next_update - computed: true, optional: true, required: false
  private _nextUpdate?: string; 
  public get nextUpdate() {
    return this.getStringAttribute('next_update');
  }
  public set nextUpdate(value: string) {
    this._nextUpdate = value;
  }
  public resetNextUpdate() {
    this._nextUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextUpdateInput() {
    return this._nextUpdate;
  }

  // server_url - computed: true, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
  public set serverUrl(value: string) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: string; 
  public get updateInterval() {
    return this.getStringAttribute('update_interval');
  }
  public set updateInterval(value: string) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}

export class FileobjectCrlInfoList extends cdktf.ComplexList {
  public internalValue? : FileobjectCrlInfo[] | cdktf.IResolvable

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
  public get(index: number): FileobjectCrlInfoOutputReference {
    return new FileobjectCrlInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileobjectEventsTaskEvent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#duration Fileobject#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#end_time Fileobject#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#message Fileobject#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#start_time Fileobject#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#status Fileobject#status}
  */
  readonly status?: string;
}

export function fileobjectEventsTaskEventToTerraform(struct?: FileobjectEventsTaskEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    message: cdktf.stringToTerraform(struct!.message),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function fileobjectEventsTaskEventToHclTerraform(struct?: FileobjectEventsTaskEvent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileobjectEventsTaskEventOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileobjectEventsTaskEvent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileobjectEventsTaskEvent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._message = undefined;
      this._startTime = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._message = value.message;
      this._startTime = value.startTime;
      this._status = value.status;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class FileobjectEventsTaskEventList extends cdktf.ComplexList {
  public internalValue? : FileobjectEventsTaskEvent[] | cdktf.IResolvable

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
  public get(index: number): FileobjectEventsTaskEventOutputReference {
    return new FileobjectEventsTaskEventOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FileobjectEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#task_name Fileobject#task_name}
  */
  readonly taskName?: string;
  /**
  * task_event block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#task_event Fileobject#task_event}
  */
  readonly taskEvent?: FileobjectEventsTaskEvent[] | cdktf.IResolvable;
}

export function fileobjectEventsToTerraform(struct?: FileobjectEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_name: cdktf.stringToTerraform(struct!.taskName),
    task_event: cdktf.listMapper(fileobjectEventsTaskEventToTerraform, true)(struct!.taskEvent),
  }
}


export function fileobjectEventsToHclTerraform(struct?: FileobjectEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_event: {
      value: cdktf.listMapperHcl(fileobjectEventsTaskEventToHclTerraform, true)(struct!.taskEvent),
      isBlock: true,
      type: "list",
      storageClassType: "FileobjectEventsTaskEventList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FileobjectEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FileobjectEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    if (this._taskEvent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskEvent = this._taskEvent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FileobjectEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskName = undefined;
      this._taskEvent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskName = value.taskName;
      this._taskEvent.internalValue = value.taskEvent;
    }
  }

  // task_name - computed: true, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_event - computed: false, optional: true, required: false
  private _taskEvent = new FileobjectEventsTaskEventList(this, "task_event", false);
  public get taskEvent() {
    return this._taskEvent;
  }
  public putTaskEvent(value: FileobjectEventsTaskEvent[] | cdktf.IResolvable) {
    this._taskEvent.internalValue = value;
  }
  public resetTaskEvent() {
    this._taskEvent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskEventInput() {
    return this._taskEvent.internalValue;
  }
}

export class FileobjectEventsList extends cdktf.ComplexList {
  public internalValue? : FileobjectEvents[] | cdktf.IResolvable

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
  public get(index: number): FileobjectEventsOutputReference {
    return new FileobjectEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject avi_fileobject}
*/
export class Fileobject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_fileobject";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fileobject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fileobject to import
  * @param importFromId The id of the existing Fileobject that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fileobject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_fileobject", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/fileobject avi_fileobject} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FileobjectConfig
  */
  public constructor(scope: Construct, id: string, config: FileobjectConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_fileobject',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checksum = config.checksum;
    this._childRefs = config.childRefs;
    this._compressed = config.compressed;
    this._created = config.created;
    this._description = config.description;
    this._expiresAt = config.expiresAt;
    this._gslbGeodbFormat = config.gslbGeodbFormat;
    this._hasParent = config.hasParent;
    this._id = config.id;
    this._isFederated = config.isFederated;
    this._name = config.name;
    this._path = config.path;
    this._readOnly = config.readOnly;
    this._restrictDownload = config.restrictDownload;
    this._size = config.size;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._version = config.version;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._crlInfo.internalValue = config.crlInfo;
    this._events.internalValue = config.events;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // child_refs - computed: false, optional: true, required: false
  private _childRefs?: string[]; 
  public get childRefs() {
    return this.getListAttribute('child_refs');
  }
  public set childRefs(value: string[]) {
    this._childRefs = value;
  }
  public resetChildRefs() {
    this._childRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childRefsInput() {
    return this._childRefs;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: string; 
  public get compressed() {
    return this.getStringAttribute('compressed');
  }
  public set compressed(value: string) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
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

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // gslb_geodb_format - computed: true, optional: true, required: false
  private _gslbGeodbFormat?: string; 
  public get gslbGeodbFormat() {
    return this.getStringAttribute('gslb_geodb_format');
  }
  public set gslbGeodbFormat(value: string) {
    this._gslbGeodbFormat = value;
  }
  public resetGslbGeodbFormat() {
    this._gslbGeodbFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbGeodbFormatInput() {
    return this._gslbGeodbFormat;
  }

  // has_parent - computed: false, optional: true, required: false
  private _hasParent?: string; 
  public get hasParent() {
    return this.getStringAttribute('has_parent');
  }
  public set hasParent(value: string) {
    this._hasParent = value;
  }
  public resetHasParent() {
    this._hasParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasParentInput() {
    return this._hasParent;
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

  // is_federated - computed: false, optional: true, required: false
  private _isFederated?: string; 
  public get isFederated() {
    return this.getStringAttribute('is_federated');
  }
  public set isFederated(value: string) {
    this._isFederated = value;
  }
  public resetIsFederated() {
    this._isFederated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFederatedInput() {
    return this._isFederated;
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: string; 
  public get readOnly() {
    return this.getStringAttribute('read_only');
  }
  public set readOnly(value: string) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // restrict_download - computed: true, optional: true, required: false
  private _restrictDownload?: string; 
  public get restrictDownload() {
    return this.getStringAttribute('restrict_download');
  }
  public set restrictDownload(value: string) {
    this._restrictDownload = value;
  }
  public resetRestrictDownload() {
    this._restrictDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictDownloadInput() {
    return this._restrictDownload;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new FileobjectConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: FileobjectConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // crl_info - computed: false, optional: true, required: false
  private _crlInfo = new FileobjectCrlInfoList(this, "crl_info", true);
  public get crlInfo() {
    return this._crlInfo;
  }
  public putCrlInfo(value: FileobjectCrlInfo[] | cdktf.IResolvable) {
    this._crlInfo.internalValue = value;
  }
  public resetCrlInfo() {
    this._crlInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInfoInput() {
    return this._crlInfo.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new FileobjectEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: FileobjectEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checksum: cdktf.stringToTerraform(this._checksum),
      child_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._childRefs),
      compressed: cdktf.stringToTerraform(this._compressed),
      created: cdktf.stringToTerraform(this._created),
      description: cdktf.stringToTerraform(this._description),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      gslb_geodb_format: cdktf.stringToTerraform(this._gslbGeodbFormat),
      has_parent: cdktf.stringToTerraform(this._hasParent),
      id: cdktf.stringToTerraform(this._id),
      is_federated: cdktf.stringToTerraform(this._isFederated),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      read_only: cdktf.stringToTerraform(this._readOnly),
      restrict_download: cdktf.stringToTerraform(this._restrictDownload),
      size: cdktf.stringToTerraform(this._size),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      version: cdktf.stringToTerraform(this._version),
      configpb_attributes: cdktf.listMapper(fileobjectConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      crl_info: cdktf.listMapper(fileobjectCrlInfoToTerraform, true)(this._crlInfo.internalValue),
      events: cdktf.listMapper(fileobjectEventsToTerraform, true)(this._events.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checksum: {
        value: cdktf.stringToHclTerraform(this._checksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      child_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._childRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      compressed: {
        value: cdktf.stringToHclTerraform(this._compressed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created: {
        value: cdktf.stringToHclTerraform(this._created),
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
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gslb_geodb_format: {
        value: cdktf.stringToHclTerraform(this._gslbGeodbFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_parent: {
        value: cdktf.stringToHclTerraform(this._hasParent),
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
      is_federated: {
        value: cdktf.stringToHclTerraform(this._isFederated),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only: {
        value: cdktf.stringToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_download: {
        value: cdktf.stringToHclTerraform(this._restrictDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(fileobjectConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FileobjectConfigpbAttributesList",
      },
      crl_info: {
        value: cdktf.listMapperHcl(fileobjectCrlInfoToHclTerraform, true)(this._crlInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FileobjectCrlInfoList",
      },
      events: {
        value: cdktf.listMapperHcl(fileobjectEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FileobjectEventsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
