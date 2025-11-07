// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbsmruntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#cluster_leader Gslbsmruntime#cluster_leader}
  */
  readonly clusterLeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#cluster_uuid Gslbsmruntime#cluster_uuid}
  */
  readonly clusterUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#enabled Gslbsmruntime#enabled}
  */
  readonly enabled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#health_monitor_info Gslbsmruntime#health_monitor_info}
  */
  readonly healthMonitorInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#id Gslbsmruntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#leader_cluster_uuid Gslbsmruntime#leader_cluster_uuid}
  */
  readonly leaderClusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#member_type Gslbsmruntime#member_type}
  */
  readonly memberType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#name Gslbsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#node_uuid Gslbsmruntime#node_uuid}
  */
  readonly nodeUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#num_of_retries Gslbsmruntime#num_of_retries}
  */
  readonly numOfRetries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#obj_uuid Gslbsmruntime#obj_uuid}
  */
  readonly objUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#role Gslbsmruntime#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#site_name Gslbsmruntime#site_name}
  */
  readonly siteName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#site_type Gslbsmruntime#site_type}
  */
  readonly siteType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#state Gslbsmruntime#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#sw_version Gslbsmruntime#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#tenant_ref Gslbsmruntime#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#uuid Gslbsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#view_id Gslbsmruntime#view_id}
  */
  readonly viewId?: string;
  /**
  * dns_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#dns_configs Gslbsmruntime#dns_configs}
  */
  readonly dnsConfigs?: GslbsmruntimeDnsConfigs[] | cdktf.IResolvable;
  /**
  * dns_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#dns_info Gslbsmruntime#dns_info}
  */
  readonly dnsInfo?: GslbsmruntimeDnsInfo[] | cdktf.IResolvable;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#events Gslbsmruntime#events}
  */
  readonly events?: GslbsmruntimeEvents[] | cdktf.IResolvable;
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#oper_status Gslbsmruntime#oper_status}
  */
  readonly operStatus?: GslbsmruntimeOperStatus[] | cdktf.IResolvable;
  /**
  * remote_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#remote_info Gslbsmruntime#remote_info}
  */
  readonly remoteInfo?: GslbsmruntimeRemoteInfo[] | cdktf.IResolvable;
}
export interface GslbsmruntimeDnsConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#domain_name Gslbsmruntime#domain_name}
  */
  readonly domainName: string;
}

export function gslbsmruntimeDnsConfigsToTerraform(struct?: GslbsmruntimeDnsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
  }
}


export function gslbsmruntimeDnsConfigsToHclTerraform(struct?: GslbsmruntimeDnsConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }
}

export class GslbsmruntimeDnsConfigsList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsConfigs[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsConfigsOutputReference {
    return new GslbsmruntimeDnsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesGeoDownload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#state Gslbsmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime[] | cdktf.IResolvable;
}

export function gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesGeoDownload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesGeoDownload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesGeoDownload[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesGslbDownload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#state Gslbsmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime[] | cdktf.IResolvable;
}

export function gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesGslbDownload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesGslbDownload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesGslbDownload[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason Gslbsmruntime#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason_code Gslbsmruntime#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason_code_string Gslbsmruntime#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#state Gslbsmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function gslbsmruntimeDnsInfoDnsVsStatesOperStatusToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesOperStatusToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeDnsInfoDnsVsStatesOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesOperStatusList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesOperStatus[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStatesPlacementRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#placement_allowed Gslbsmruntime#placement_allowed}
  */
  readonly placementAllowed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#sub_domain Gslbsmruntime#sub_domain}
  */
  readonly subDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#transition_ops Gslbsmruntime#transition_ops}
  */
  readonly transitionOps?: string;
}

export function gslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesPlacementRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    placement_allowed: cdktf.stringToTerraform(struct!.placementAllowed),
    sub_domain: cdktf.stringToTerraform(struct!.subDomain),
    transition_ops: cdktf.stringToTerraform(struct!.transitionOps),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStatesPlacementRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    placement_allowed: {
      value: cdktf.stringToHclTerraform(struct!.placementAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_domain: {
      value: cdktf.stringToHclTerraform(struct!.subDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transition_ops: {
      value: cdktf.stringToHclTerraform(struct!.transitionOps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStatesPlacementRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._placementAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementAllowed = this._placementAllowed;
    }
    if (this._subDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subDomain = this._subDomain;
    }
    if (this._transitionOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitionOps = this._transitionOps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStatesPlacementRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._placementAllowed = undefined;
      this._subDomain = undefined;
      this._transitionOps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._placementAllowed = value.placementAllowed;
      this._subDomain = value.subDomain;
      this._transitionOps = value.transitionOps;
    }
  }

  // placement_allowed - computed: true, optional: true, required: false
  private _placementAllowed?: string; 
  public get placementAllowed() {
    return this.getStringAttribute('placement_allowed');
  }
  public set placementAllowed(value: string) {
    this._placementAllowed = value;
  }
  public resetPlacementAllowed() {
    this._placementAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementAllowedInput() {
    return this._placementAllowed;
  }

  // sub_domain - computed: true, optional: true, required: false
  private _subDomain?: string; 
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }
  public set subDomain(value: string) {
    this._subDomain = value;
  }
  public resetSubDomain() {
    this._subDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain;
  }

  // transition_ops - computed: false, optional: true, required: false
  private _transitionOps?: string; 
  public get transitionOps() {
    return this.getStringAttribute('transition_ops');
  }
  public set transitionOps(value: string) {
    this._transitionOps = value;
  }
  public resetTransitionOps() {
    this._transitionOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionOpsInput() {
    return this._transitionOps;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStatesPlacementRules[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfoDnsVsStates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#name Gslbsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#se_list Gslbsmruntime#se_list}
  */
  readonly seList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#uuid Gslbsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#valid_dns_vs Gslbsmruntime#valid_dns_vs}
  */
  readonly validDnsVs?: string;
  /**
  * geo_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#geo_download Gslbsmruntime#geo_download}
  */
  readonly geoDownload?: GslbsmruntimeDnsInfoDnsVsStatesGeoDownload[] | cdktf.IResolvable;
  /**
  * gslb_download block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#gslb_download Gslbsmruntime#gslb_download}
  */
  readonly gslbDownload?: GslbsmruntimeDnsInfoDnsVsStatesGslbDownload[] | cdktf.IResolvable;
  /**
  * oper_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#oper_status Gslbsmruntime#oper_status}
  */
  readonly operStatus?: GslbsmruntimeDnsInfoDnsVsStatesOperStatus[] | cdktf.IResolvable;
  /**
  * placement_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#placement_rules Gslbsmruntime#placement_rules}
  */
  readonly placementRules?: GslbsmruntimeDnsInfoDnsVsStatesPlacementRules[] | cdktf.IResolvable;
}

export function gslbsmruntimeDnsInfoDnsVsStatesToTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    se_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.seList),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    valid_dns_vs: cdktf.stringToTerraform(struct!.validDnsVs),
    geo_download: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToTerraform, true)(struct!.geoDownload),
    gslb_download: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToTerraform, true)(struct!.gslbDownload),
    oper_status: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesOperStatusToTerraform, true)(struct!.operStatus),
    placement_rules: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToTerraform, true)(struct!.placementRules),
  }
}


export function gslbsmruntimeDnsInfoDnsVsStatesToHclTerraform(struct?: GslbsmruntimeDnsInfoDnsVsStates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.seList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_dns_vs: {
      value: cdktf.stringToHclTerraform(struct!.validDnsVs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_download: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesGeoDownloadToHclTerraform, true)(struct!.geoDownload),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadList",
    },
    gslb_download: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesGslbDownloadToHclTerraform, true)(struct!.gslbDownload),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadList",
    },
    oper_status: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesOperStatusToHclTerraform, true)(struct!.operStatus),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesOperStatusList",
    },
    placement_rules: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesPlacementRulesToHclTerraform, true)(struct!.placementRules),
      isBlock: true,
      type: "list",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoDnsVsStatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfoDnsVsStates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._seList !== undefined) {
      hasAnyValues = true;
      internalValueResult.seList = this._seList;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._validDnsVs !== undefined) {
      hasAnyValues = true;
      internalValueResult.validDnsVs = this._validDnsVs;
    }
    if (this._geoDownload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoDownload = this._geoDownload?.internalValue;
    }
    if (this._gslbDownload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbDownload = this._gslbDownload?.internalValue;
    }
    if (this._operStatus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operStatus = this._operStatus?.internalValue;
    }
    if (this._placementRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementRules = this._placementRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfoDnsVsStates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._seList = undefined;
      this._uuid = undefined;
      this._validDnsVs = undefined;
      this._geoDownload.internalValue = undefined;
      this._gslbDownload.internalValue = undefined;
      this._operStatus.internalValue = undefined;
      this._placementRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._seList = value.seList;
      this._uuid = value.uuid;
      this._validDnsVs = value.validDnsVs;
      this._geoDownload.internalValue = value.geoDownload;
      this._gslbDownload.internalValue = value.gslbDownload;
      this._operStatus.internalValue = value.operStatus;
      this._placementRules.internalValue = value.placementRules;
    }
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

  // se_list - computed: false, optional: true, required: false
  private _seList?: string[]; 
  public get seList() {
    return this.getListAttribute('se_list');
  }
  public set seList(value: string[]) {
    this._seList = value;
  }
  public resetSeList() {
    this._seList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seListInput() {
    return this._seList;
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

  // valid_dns_vs - computed: false, optional: true, required: false
  private _validDnsVs?: string; 
  public get validDnsVs() {
    return this.getStringAttribute('valid_dns_vs');
  }
  public set validDnsVs(value: string) {
    this._validDnsVs = value;
  }
  public resetValidDnsVs() {
    this._validDnsVs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validDnsVsInput() {
    return this._validDnsVs;
  }

  // geo_download - computed: false, optional: true, required: false
  private _geoDownload = new GslbsmruntimeDnsInfoDnsVsStatesGeoDownloadList(this, "geo_download", true);
  public get geoDownload() {
    return this._geoDownload;
  }
  public putGeoDownload(value: GslbsmruntimeDnsInfoDnsVsStatesGeoDownload[] | cdktf.IResolvable) {
    this._geoDownload.internalValue = value;
  }
  public resetGeoDownload() {
    this._geoDownload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoDownloadInput() {
    return this._geoDownload.internalValue;
  }

  // gslb_download - computed: false, optional: true, required: false
  private _gslbDownload = new GslbsmruntimeDnsInfoDnsVsStatesGslbDownloadList(this, "gslb_download", true);
  public get gslbDownload() {
    return this._gslbDownload;
  }
  public putGslbDownload(value: GslbsmruntimeDnsInfoDnsVsStatesGslbDownload[] | cdktf.IResolvable) {
    this._gslbDownload.internalValue = value;
  }
  public resetGslbDownload() {
    this._gslbDownload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbDownloadInput() {
    return this._gslbDownload.internalValue;
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new GslbsmruntimeDnsInfoDnsVsStatesOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: GslbsmruntimeDnsInfoDnsVsStatesOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }

  // placement_rules - computed: false, optional: true, required: false
  private _placementRules = new GslbsmruntimeDnsInfoDnsVsStatesPlacementRulesList(this, "placement_rules", false);
  public get placementRules() {
    return this._placementRules;
  }
  public putPlacementRules(value: GslbsmruntimeDnsInfoDnsVsStatesPlacementRules[] | cdktf.IResolvable) {
    this._placementRules.internalValue = value;
  }
  public resetPlacementRules() {
    this._placementRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementRulesInput() {
    return this._placementRules.internalValue;
  }
}

export class GslbsmruntimeDnsInfoDnsVsStatesList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfoDnsVsStates[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoDnsVsStatesOutputReference {
    return new GslbsmruntimeDnsInfoDnsVsStatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeDnsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#dns_active Gslbsmruntime#dns_active}
  */
  readonly dnsActive?: string;
  /**
  * dns_vs_states block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#dns_vs_states Gslbsmruntime#dns_vs_states}
  */
  readonly dnsVsStates?: GslbsmruntimeDnsInfoDnsVsStates[] | cdktf.IResolvable;
}

export function gslbsmruntimeDnsInfoToTerraform(struct?: GslbsmruntimeDnsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_active: cdktf.stringToTerraform(struct!.dnsActive),
    dns_vs_states: cdktf.listMapper(gslbsmruntimeDnsInfoDnsVsStatesToTerraform, true)(struct!.dnsVsStates),
  }
}


export function gslbsmruntimeDnsInfoToHclTerraform(struct?: GslbsmruntimeDnsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_active: {
      value: cdktf.stringToHclTerraform(struct!.dnsActive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_vs_states: {
      value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoDnsVsStatesToHclTerraform, true)(struct!.dnsVsStates),
      isBlock: true,
      type: "list",
      storageClassType: "GslbsmruntimeDnsInfoDnsVsStatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeDnsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeDnsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsActive = this._dnsActive;
    }
    if (this._dnsVsStates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVsStates = this._dnsVsStates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeDnsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsActive = undefined;
      this._dnsVsStates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsActive = value.dnsActive;
      this._dnsVsStates.internalValue = value.dnsVsStates;
    }
  }

  // dns_active - computed: true, optional: true, required: false
  private _dnsActive?: string; 
  public get dnsActive() {
    return this.getStringAttribute('dns_active');
  }
  public set dnsActive(value: string) {
    this._dnsActive = value;
  }
  public resetDnsActive() {
    this._dnsActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsActiveInput() {
    return this._dnsActive;
  }

  // dns_vs_states - computed: false, optional: true, required: false
  private _dnsVsStates = new GslbsmruntimeDnsInfoDnsVsStatesList(this, "dns_vs_states", false);
  public get dnsVsStates() {
    return this._dnsVsStates;
  }
  public putDnsVsStates(value: GslbsmruntimeDnsInfoDnsVsStates[] | cdktf.IResolvable) {
    this._dnsVsStates.internalValue = value;
  }
  public resetDnsVsStates() {
    this._dnsVsStates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVsStatesInput() {
    return this._dnsVsStates.internalValue;
  }
}

export class GslbsmruntimeDnsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeDnsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeDnsInfoOutputReference {
    return new GslbsmruntimeDnsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeEventsTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeEventsTimestampToTerraform(struct?: GslbsmruntimeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeEventsTimestampToHclTerraform(struct?: GslbsmruntimeEventsTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeEventsTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeEventsTimestamp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeEventsTimestamp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeEventsTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeEventsTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeEventsTimestampOutputReference {
    return new GslbsmruntimeEventsTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#msg Gslbsmruntime#msg}
  */
  readonly msg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#name Gslbsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#uuid Gslbsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#timestamp Gslbsmruntime#timestamp}
  */
  readonly timestamp?: GslbsmruntimeEventsTimestamp[] | cdktf.IResolvable;
}

export function gslbsmruntimeEventsToTerraform(struct?: GslbsmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    msg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.msg),
    name: cdktf.stringToTerraform(struct!.name),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    timestamp: cdktf.listMapper(gslbsmruntimeEventsTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbsmruntimeEventsToHclTerraform(struct?: GslbsmruntimeEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    msg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.msg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.listMapperHcl(gslbsmruntimeEventsTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeEventsTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._msg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msg = this._msg;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._msg = undefined;
      this._name = undefined;
      this._uuid = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._msg = value.msg;
      this._name = value.name;
      this._uuid = value.uuid;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // msg - computed: false, optional: true, required: false
  private _msg?: string[]; 
  public get msg() {
    return this.getListAttribute('msg');
  }
  public set msg(value: string[]) {
    this._msg = value;
  }
  public resetMsg() {
    this._msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg;
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

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new GslbsmruntimeEventsTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbsmruntimeEventsTimestamp[] | cdktf.IResolvable) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class GslbsmruntimeEventsList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeEvents[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeEventsOutputReference {
    return new GslbsmruntimeEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeOperStatusLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeOperStatusLastChangedTimeToTerraform(struct?: GslbsmruntimeOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeOperStatusLastChangedTimeToHclTerraform(struct?: GslbsmruntimeOperStatusLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeOperStatusLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeOperStatusLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeOperStatusLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeOperStatusLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeOperStatusLastChangedTimeOutputReference {
    return new GslbsmruntimeOperStatusLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeOperStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason Gslbsmruntime#reason}
  */
  readonly reason?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason_code Gslbsmruntime#reason_code}
  */
  readonly reasonCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason_code_string Gslbsmruntime#reason_code_string}
  */
  readonly reasonCodeString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#state Gslbsmruntime#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable;
}

export function gslbsmruntimeOperStatusToTerraform(struct?: GslbsmruntimeOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reason),
    reason_code: cdktf.stringToTerraform(struct!.reasonCode),
    reason_code_string: cdktf.stringToTerraform(struct!.reasonCodeString),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(gslbsmruntimeOperStatusLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function gslbsmruntimeOperStatusToHclTerraform(struct?: GslbsmruntimeOperStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reason),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    reason_code: {
      value: cdktf.stringToHclTerraform(struct!.reasonCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason_code_string: {
      value: cdktf.stringToHclTerraform(struct!.reasonCodeString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeOperStatusLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeOperStatusLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeOperStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeOperStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._reasonCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCode = this._reasonCode;
    }
    if (this._reasonCodeString !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasonCodeString = this._reasonCodeString;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeOperStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._reasonCode = undefined;
      this._reasonCodeString = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._reasonCode = value.reasonCode;
      this._reasonCodeString = value.reasonCodeString;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string[]; 
  public get reason() {
    return this.getListAttribute('reason');
  }
  public set reason(value: string[]) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // reason_code - computed: true, optional: true, required: false
  private _reasonCode?: string; 
  public get reasonCode() {
    return this.getStringAttribute('reason_code');
  }
  public set reasonCode(value: string) {
    this._reasonCode = value;
  }
  public resetReasonCode() {
    this._reasonCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeInput() {
    return this._reasonCode;
  }

  // reason_code_string - computed: true, optional: true, required: false
  private _reasonCodeString?: string; 
  public get reasonCodeString() {
    return this.getStringAttribute('reason_code_string');
  }
  public set reasonCodeString(value: string) {
    this._reasonCodeString = value;
  }
  public resetReasonCodeString() {
    this._reasonCodeString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonCodeStringInput() {
    return this._reasonCodeString;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeOperStatusLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeOperStatusLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class GslbsmruntimeOperStatusList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeOperStatus[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeOperStatusOutputReference {
    return new GslbsmruntimeOperStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#dnsvs_uuid Gslbsmruntime#dnsvs_uuid}
  */
  readonly dnsvsUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#ops Gslbsmruntime#ops}
  */
  readonly ops?: string;
  /**
  * timestamp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#timestamp Gslbsmruntime#timestamp}
  */
  readonly timestamp?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dnsvs_uuid: cdktf.stringToTerraform(struct!.dnsvsUuid),
    ops: cdktf.stringToTerraform(struct!.ops),
    timestamp: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToTerraform, true)(struct!.timestamp),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dnsvs_uuid: {
      value: cdktf.stringToHclTerraform(struct!.dnsvsUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampToHclTerraform, true)(struct!.timestamp),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsvsUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsvsUuid = this._dnsvsUuid;
    }
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._timestamp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsvsUuid = undefined;
      this._ops = undefined;
      this._timestamp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsvsUuid = value.dnsvsUuid;
      this._ops = value.ops;
      this._timestamp.internalValue = value.timestamp;
    }
  }

  // dnsvs_uuid - computed: true, optional: true, required: false
  private _dnsvsUuid?: string; 
  public get dnsvsUuid() {
    return this.getStringAttribute('dnsvs_uuid');
  }
  public set dnsvsUuid(value: string) {
    this._dnsvsUuid = value;
  }
  public resetDnsvsUuid() {
    this._dnsvsUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsvsUuidInput() {
    return this._dnsvsUuid;
  }

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp = new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestampList(this, "timestamp", true);
  public get timestamp() {
    return this._timestamp;
  }
  public putTimestamp(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoTimestamp[] | cdktf.IResolvable) {
    this._timestamp.internalValue = value;
  }
  public resetTimestamp() {
    this._timestamp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig {
  /**
  * vsgs_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#vsgs_info Gslbsmruntime#vsgs_info}
  */
  readonly vsgsInfo?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsgs_info: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToTerraform, true)(struct!.vsgsInfo),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsgs_info: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoToHclTerraform, true)(struct!.vsgsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vsgsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsgsInfo = this._vsgsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vsgsInfo.internalValue = value.vsgsInfo;
    }
  }

  // vsgs_info - computed: false, optional: true, required: false
  private _vsgsInfo = new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfoList(this, "vsgs_info", false);
  public get vsgsInfo() {
    return this._vsgsInfo;
  }
  public putVsgsInfo(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigVsgsInfo[] | cdktf.IResolvable) {
    this._vsgsInfo.internalValue = value;
  }
  public resetVsgsInfo() {
    this._vsgsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsgsInfoInput() {
    return this._vsgsInfo.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfoReplState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#cfg_version Gslbsmruntime#cfg_version}
  */
  readonly cfgVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#cfg_version_in_flight Gslbsmruntime#cfg_version_in_flight}
  */
  readonly cfgVersionInFlight?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason Gslbsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#site_uuid Gslbsmruntime#site_uuid}
  */
  readonly siteUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#status Gslbsmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#uuid Gslbsmruntime#uuid}
  */
  readonly uuid?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable;
  /**
  * local_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#local_config Gslbsmruntime#local_config}
  */
  readonly localConfig?: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoGslbInfoReplStateToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg_version: cdktf.stringToTerraform(struct!.cfgVersion),
    cfg_version_in_flight: cdktf.stringToTerraform(struct!.cfgVersionInFlight),
    reason: cdktf.stringToTerraform(struct!.reason),
    site_uuid: cdktf.stringToTerraform(struct!.siteUuid),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    last_changed_time: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    local_config: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToTerraform, true)(struct!.localConfig),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg_version: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfg_version_in_flight: {
      value: cdktf.stringToHclTerraform(struct!.cfgVersionInFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_uuid: {
      value: cdktf.stringToHclTerraform(struct!.siteUuid),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList",
    },
    local_config: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigToHclTerraform, true)(struct!.localConfig),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfgVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersion = this._cfgVersion;
    }
    if (this._cfgVersionInFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgVersionInFlight = this._cfgVersionInFlight;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._siteUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUuid = this._siteUuid;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    if (this._localConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localConfig = this._localConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfoReplState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cfgVersion = undefined;
      this._cfgVersionInFlight = undefined;
      this._reason = undefined;
      this._siteUuid = undefined;
      this._status = undefined;
      this._uuid = undefined;
      this._lastChangedTime.internalValue = undefined;
      this._localConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cfgVersion = value.cfgVersion;
      this._cfgVersionInFlight = value.cfgVersionInFlight;
      this._reason = value.reason;
      this._siteUuid = value.siteUuid;
      this._status = value.status;
      this._uuid = value.uuid;
      this._lastChangedTime.internalValue = value.lastChangedTime;
      this._localConfig.internalValue = value.localConfig;
    }
  }

  // cfg_version - computed: true, optional: true, required: false
  private _cfgVersion?: string; 
  public get cfgVersion() {
    return this.getStringAttribute('cfg_version');
  }
  public set cfgVersion(value: string) {
    this._cfgVersion = value;
  }
  public resetCfgVersion() {
    this._cfgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInput() {
    return this._cfgVersion;
  }

  // cfg_version_in_flight - computed: true, optional: true, required: false
  private _cfgVersionInFlight?: string; 
  public get cfgVersionInFlight() {
    return this.getStringAttribute('cfg_version_in_flight');
  }
  public set cfgVersionInFlight(value: string) {
    this._cfgVersionInFlight = value;
  }
  public resetCfgVersionInFlight() {
    this._cfgVersionInFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgVersionInFlightInput() {
    return this._cfgVersionInFlight;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // site_uuid - computed: true, optional: true, required: false
  private _siteUuid?: string; 
  public get siteUuid() {
    return this.getStringAttribute('site_uuid');
  }
  public set siteUuid(value: string) {
    this._siteUuid = value;
  }
  public resetSiteUuid() {
    this._siteUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUuidInput() {
    return this._siteUuid;
  }

  // status - computed: false, optional: true, required: false
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

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }

  // local_config - computed: false, optional: true, required: false
  private _localConfig = new GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfigList(this, "local_config", true);
  public get localConfig() {
    return this._localConfig;
  }
  public putLocalConfig(value: GslbsmruntimeRemoteInfoGslbInfoReplStateLocalConfig[] | cdktf.IResolvable) {
    this._localConfig.internalValue = value;
  }
  public resetLocalConfig() {
    this._localConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localConfigInput() {
    return this._localConfig.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoReplStateList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoReplStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoGslbInfo {
  /**
  * repl_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#repl_state Gslbsmruntime#repl_state}
  */
  readonly replState?: GslbsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoGslbInfoToTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repl_state: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoReplStateToTerraform, true)(struct!.replState),
  }
}


export function gslbsmruntimeRemoteInfoGslbInfoToHclTerraform(struct?: GslbsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repl_state: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoReplStateToHclTerraform, true)(struct!.replState),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoReplStateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoGslbInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replState?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replState = this._replState?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoGslbInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replState.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replState.internalValue = value.replState;
    }
  }

  // repl_state - computed: false, optional: true, required: false
  private _replState = new GslbsmruntimeRemoteInfoGslbInfoReplStateList(this, "repl_state", true);
  public get replState() {
    return this._replState;
  }
  public putReplState(value: GslbsmruntimeRemoteInfoGslbInfoReplState[] | cdktf.IResolvable) {
    this._replState.internalValue = value;
  }
  public resetReplState() {
    this._replState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replStateInput() {
    return this._replState.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoGslbInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoGslbInfoOutputReference {
    return new GslbsmruntimeRemoteInfoGslbInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoOpsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#rrtoken Gslbsmruntime#rrtoken}
  */
  readonly rrtoken?: string[];
}

export function gslbsmruntimeRemoteInfoOpsInfoToTerraform(struct?: GslbsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrtoken: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rrtoken),
  }
}


export function gslbsmruntimeRemoteInfoOpsInfoToHclTerraform(struct?: GslbsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rrtoken: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rrtoken),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoOpsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rrtoken !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrtoken = this._rrtoken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoOpsInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rrtoken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rrtoken = value.rrtoken;
    }
  }

  // rrtoken - computed: false, optional: true, required: false
  private _rrtoken?: string[]; 
  public get rrtoken() {
    return this.getListAttribute('rrtoken');
  }
  public set rrtoken(value: string[]) {
    this._rrtoken = value;
  }
  public resetRrtoken() {
    this._rrtoken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrtokenInput() {
    return this._rrtoken;
  }
}

export class GslbsmruntimeRemoteInfoOpsInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoOpsInfoOutputReference {
    return new GslbsmruntimeRemoteInfoOpsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoSyncInfoErroredObjects {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#ds_name Gslbsmruntime#ds_name}
  */
  readonly dsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#name Gslbsmruntime#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#ops Gslbsmruntime#ops}
  */
  readonly ops?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason Gslbsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#status Gslbsmruntime#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#uuid Gslbsmruntime#uuid}
  */
  readonly uuid?: string;
}

export function gslbsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ds_name: cdktf.stringToTerraform(struct!.dsName),
    name: cdktf.stringToTerraform(struct!.name),
    ops: cdktf.stringToTerraform(struct!.ops),
    reason: cdktf.stringToTerraform(struct!.reason),
    status: cdktf.stringToTerraform(struct!.status),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ds_name: {
      value: cdktf.stringToHclTerraform(struct!.dsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ops: {
      value: cdktf.stringToHclTerraform(struct!.ops),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
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

export class GslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsName = this._dsName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ops !== undefined) {
      hasAnyValues = true;
      internalValueResult.ops = this._ops;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoSyncInfoErroredObjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsName = undefined;
      this._name = undefined;
      this._ops = undefined;
      this._reason = undefined;
      this._status = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsName = value.dsName;
      this._name = value.name;
      this._ops = value.ops;
      this._reason = value.reason;
      this._status = value.status;
      this._uuid = value.uuid;
    }
  }

  // ds_name - computed: true, optional: true, required: false
  private _dsName?: string; 
  public get dsName() {
    return this.getStringAttribute('ds_name');
  }
  public set dsName(value: string) {
    this._dsName = value;
  }
  public resetDsName() {
    this._dsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsNameInput() {
    return this._dsName;
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

  // ops - computed: true, optional: true, required: false
  private _ops?: string; 
  public get ops() {
    return this.getStringAttribute('ops');
  }
  public set ops(value: string) {
    this._ops = value;
  }
  public resetOps() {
    this._ops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInput() {
    return this._ops;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
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

export class GslbsmruntimeRemoteInfoSyncInfoErroredObjectsList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference {
    return new GslbsmruntimeRemoteInfoSyncInfoErroredObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoSyncInfoLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#secs Gslbsmruntime#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#usecs Gslbsmruntime#usecs}
  */
  readonly usecs: string;
}

export function gslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function gslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoSyncInfoLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference {
    return new GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoSyncInfoLastFailObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#event_type Gslbsmruntime#event_type}
  */
  readonly eventType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#obj_name Gslbsmruntime#obj_name}
  */
  readonly objName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#obj_uuid Gslbsmruntime#obj_uuid}
  */
  readonly objUuid?: string;
}

export function gslbsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    obj_name: cdktf.stringToTerraform(struct!.objName),
    obj_uuid: cdktf.stringToTerraform(struct!.objUuid),
  }
}


export function gslbsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_name: {
      value: cdktf.stringToHclTerraform(struct!.objName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obj_uuid: {
      value: cdktf.stringToHclTerraform(struct!.objUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._objName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objName = this._objName;
    }
    if (this._objUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.objUuid = this._objUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoSyncInfoLastFailObj | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._objName = undefined;
      this._objUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._objName = value.objName;
      this._objUuid = value.objUuid;
    }
  }

  // event_type - computed: true, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // obj_name - computed: true, optional: true, required: false
  private _objName?: string; 
  public get objName() {
    return this.getStringAttribute('obj_name');
  }
  public set objName(value: string) {
    this._objName = value;
  }
  public resetObjName() {
    this._objName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objNameInput() {
    return this._objName;
  }

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }
}

export class GslbsmruntimeRemoteInfoSyncInfoLastFailObjList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference {
    return new GslbsmruntimeRemoteInfoSyncInfoLastFailObjOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoSyncInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#prev_target_version Gslbsmruntime#prev_target_version}
  */
  readonly prevTargetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#reason Gslbsmruntime#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#recommendation Gslbsmruntime#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#site_version Gslbsmruntime#site_version}
  */
  readonly siteVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#sync_state Gslbsmruntime#sync_state}
  */
  readonly syncState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#target_version Gslbsmruntime#target_version}
  */
  readonly targetVersion?: string;
  /**
  * errored_objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#errored_objects Gslbsmruntime#errored_objects}
  */
  readonly erroredObjects?: GslbsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_changed_time Gslbsmruntime#last_changed_time}
  */
  readonly lastChangedTime?: GslbsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable;
  /**
  * last_fail_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#last_fail_obj Gslbsmruntime#last_fail_obj}
  */
  readonly lastFailObj?: GslbsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoSyncInfoToTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prev_target_version: cdktf.stringToTerraform(struct!.prevTargetVersion),
    reason: cdktf.stringToTerraform(struct!.reason),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    site_version: cdktf.stringToTerraform(struct!.siteVersion),
    sync_state: cdktf.stringToTerraform(struct!.syncState),
    target_version: cdktf.stringToTerraform(struct!.targetVersion),
    errored_objects: cdktf.listMapper(gslbsmruntimeRemoteInfoSyncInfoErroredObjectsToTerraform, true)(struct!.erroredObjects),
    last_changed_time: cdktf.listMapper(gslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
    last_fail_obj: cdktf.listMapper(gslbsmruntimeRemoteInfoSyncInfoLastFailObjToTerraform, true)(struct!.lastFailObj),
  }
}


export function gslbsmruntimeRemoteInfoSyncInfoToHclTerraform(struct?: GslbsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prev_target_version: {
      value: cdktf.stringToHclTerraform(struct!.prevTargetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_version: {
      value: cdktf.stringToHclTerraform(struct!.siteVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_state: {
      value: cdktf.stringToHclTerraform(struct!.syncState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_version: {
      value: cdktf.stringToHclTerraform(struct!.targetVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    errored_objects: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoSyncInfoErroredObjectsToHclTerraform, true)(struct!.erroredObjects),
      isBlock: true,
      type: "list",
      storageClassType: "GslbsmruntimeRemoteInfoSyncInfoErroredObjectsList",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoSyncInfoLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeList",
    },
    last_fail_obj: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoSyncInfoLastFailObjToHclTerraform, true)(struct!.lastFailObj),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoSyncInfoLastFailObjList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoSyncInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prevTargetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.prevTargetVersion = this._prevTargetVersion;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._siteVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteVersion = this._siteVersion;
    }
    if (this._syncState !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncState = this._syncState;
    }
    if (this._targetVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVersion = this._targetVersion;
    }
    if (this._erroredObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.erroredObjects = this._erroredObjects?.internalValue;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    if (this._lastFailObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastFailObj = this._lastFailObj?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoSyncInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prevTargetVersion = undefined;
      this._reason = undefined;
      this._recommendation = undefined;
      this._siteVersion = undefined;
      this._syncState = undefined;
      this._targetVersion = undefined;
      this._erroredObjects.internalValue = undefined;
      this._lastChangedTime.internalValue = undefined;
      this._lastFailObj.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prevTargetVersion = value.prevTargetVersion;
      this._reason = value.reason;
      this._recommendation = value.recommendation;
      this._siteVersion = value.siteVersion;
      this._syncState = value.syncState;
      this._targetVersion = value.targetVersion;
      this._erroredObjects.internalValue = value.erroredObjects;
      this._lastChangedTime.internalValue = value.lastChangedTime;
      this._lastFailObj.internalValue = value.lastFailObj;
    }
  }

  // prev_target_version - computed: true, optional: true, required: false
  private _prevTargetVersion?: string; 
  public get prevTargetVersion() {
    return this.getStringAttribute('prev_target_version');
  }
  public set prevTargetVersion(value: string) {
    this._prevTargetVersion = value;
  }
  public resetPrevTargetVersion() {
    this._prevTargetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prevTargetVersionInput() {
    return this._prevTargetVersion;
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // recommendation - computed: true, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // site_version - computed: true, optional: true, required: false
  private _siteVersion?: string; 
  public get siteVersion() {
    return this.getStringAttribute('site_version');
  }
  public set siteVersion(value: string) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // sync_state - computed: true, optional: true, required: false
  private _syncState?: string; 
  public get syncState() {
    return this.getStringAttribute('sync_state');
  }
  public set syncState(value: string) {
    this._syncState = value;
  }
  public resetSyncState() {
    this._syncState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStateInput() {
    return this._syncState;
  }

  // target_version - computed: true, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // errored_objects - computed: false, optional: true, required: false
  private _erroredObjects = new GslbsmruntimeRemoteInfoSyncInfoErroredObjectsList(this, "errored_objects", false);
  public get erroredObjects() {
    return this._erroredObjects;
  }
  public putErroredObjects(value: GslbsmruntimeRemoteInfoSyncInfoErroredObjects[] | cdktf.IResolvable) {
    this._erroredObjects.internalValue = value;
  }
  public resetErroredObjects() {
    this._erroredObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erroredObjectsInput() {
    return this._erroredObjects.internalValue;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new GslbsmruntimeRemoteInfoSyncInfoLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: GslbsmruntimeRemoteInfoSyncInfoLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }

  // last_fail_obj - computed: false, optional: true, required: false
  private _lastFailObj = new GslbsmruntimeRemoteInfoSyncInfoLastFailObjList(this, "last_fail_obj", true);
  public get lastFailObj() {
    return this._lastFailObj;
  }
  public putLastFailObj(value: GslbsmruntimeRemoteInfoSyncInfoLastFailObj[] | cdktf.IResolvable) {
    this._lastFailObj.internalValue = value;
  }
  public resetLastFailObj() {
    this._lastFailObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastFailObjInput() {
    return this._lastFailObj.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoSyncInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoSyncInfoOutputReference {
    return new GslbsmruntimeRemoteInfoSyncInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfoSyncStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#acknowledged_version Gslbsmruntime#acknowledged_version}
  */
  readonly acknowledgedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#pending_object_count Gslbsmruntime#pending_object_count}
  */
  readonly pendingObjectCount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#received_version Gslbsmruntime#received_version}
  */
  readonly receivedVersion?: string;
}

export function gslbsmruntimeRemoteInfoSyncStatsToTerraform(struct?: GslbsmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledged_version: cdktf.stringToTerraform(struct!.acknowledgedVersion),
    pending_object_count: cdktf.stringToTerraform(struct!.pendingObjectCount),
    received_version: cdktf.stringToTerraform(struct!.receivedVersion),
  }
}


export function gslbsmruntimeRemoteInfoSyncStatsToHclTerraform(struct?: GslbsmruntimeRemoteInfoSyncStats | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledged_version: {
      value: cdktf.stringToHclTerraform(struct!.acknowledgedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pending_object_count: {
      value: cdktf.stringToHclTerraform(struct!.pendingObjectCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    received_version: {
      value: cdktf.stringToHclTerraform(struct!.receivedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoSyncStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgedVersion = this._acknowledgedVersion;
    }
    if (this._pendingObjectCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingObjectCount = this._pendingObjectCount;
    }
    if (this._receivedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivedVersion = this._receivedVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfoSyncStats | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acknowledgedVersion = undefined;
      this._pendingObjectCount = undefined;
      this._receivedVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acknowledgedVersion = value.acknowledgedVersion;
      this._pendingObjectCount = value.pendingObjectCount;
      this._receivedVersion = value.receivedVersion;
    }
  }

  // acknowledged_version - computed: true, optional: true, required: false
  private _acknowledgedVersion?: string; 
  public get acknowledgedVersion() {
    return this.getStringAttribute('acknowledged_version');
  }
  public set acknowledgedVersion(value: string) {
    this._acknowledgedVersion = value;
  }
  public resetAcknowledgedVersion() {
    this._acknowledgedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedVersionInput() {
    return this._acknowledgedVersion;
  }

  // pending_object_count - computed: true, optional: true, required: false
  private _pendingObjectCount?: string; 
  public get pendingObjectCount() {
    return this.getStringAttribute('pending_object_count');
  }
  public set pendingObjectCount(value: string) {
    this._pendingObjectCount = value;
  }
  public resetPendingObjectCount() {
    this._pendingObjectCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingObjectCountInput() {
    return this._pendingObjectCount;
  }

  // received_version - computed: true, optional: true, required: false
  private _receivedVersion?: string; 
  public get receivedVersion() {
    return this.getStringAttribute('received_version');
  }
  public set receivedVersion(value: string) {
    this._receivedVersion = value;
  }
  public resetReceivedVersion() {
    this._receivedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivedVersionInput() {
    return this._receivedVersion;
  }
}

export class GslbsmruntimeRemoteInfoSyncStatsList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoSyncStatsOutputReference {
    return new GslbsmruntimeRemoteInfoSyncStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbsmruntimeRemoteInfo {
  /**
  * gslb_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#gslb_info Gslbsmruntime#gslb_info}
  */
  readonly gslbInfo?: GslbsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable;
  /**
  * ops_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#ops_info Gslbsmruntime#ops_info}
  */
  readonly opsInfo?: GslbsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable;
  /**
  * sync_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#sync_info Gslbsmruntime#sync_info}
  */
  readonly syncInfo?: GslbsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable;
  /**
  * sync_stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#sync_stats Gslbsmruntime#sync_stats}
  */
  readonly syncStats?: GslbsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable;
}

export function gslbsmruntimeRemoteInfoToTerraform(struct?: GslbsmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gslb_info: cdktf.listMapper(gslbsmruntimeRemoteInfoGslbInfoToTerraform, true)(struct!.gslbInfo),
    ops_info: cdktf.listMapper(gslbsmruntimeRemoteInfoOpsInfoToTerraform, true)(struct!.opsInfo),
    sync_info: cdktf.listMapper(gslbsmruntimeRemoteInfoSyncInfoToTerraform, true)(struct!.syncInfo),
    sync_stats: cdktf.listMapper(gslbsmruntimeRemoteInfoSyncStatsToTerraform, true)(struct!.syncStats),
  }
}


export function gslbsmruntimeRemoteInfoToHclTerraform(struct?: GslbsmruntimeRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gslb_info: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoGslbInfoToHclTerraform, true)(struct!.gslbInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoGslbInfoList",
    },
    ops_info: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoOpsInfoToHclTerraform, true)(struct!.opsInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoOpsInfoList",
    },
    sync_info: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoSyncInfoToHclTerraform, true)(struct!.syncInfo),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoSyncInfoList",
    },
    sync_stats: {
      value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoSyncStatsToHclTerraform, true)(struct!.syncStats),
      isBlock: true,
      type: "set",
      storageClassType: "GslbsmruntimeRemoteInfoSyncStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbsmruntimeRemoteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbsmruntimeRemoteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gslbInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbInfo = this._gslbInfo?.internalValue;
    }
    if (this._opsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opsInfo = this._opsInfo?.internalValue;
    }
    if (this._syncInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncInfo = this._syncInfo?.internalValue;
    }
    if (this._syncStats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStats = this._syncStats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbsmruntimeRemoteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gslbInfo.internalValue = undefined;
      this._opsInfo.internalValue = undefined;
      this._syncInfo.internalValue = undefined;
      this._syncStats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gslbInfo.internalValue = value.gslbInfo;
      this._opsInfo.internalValue = value.opsInfo;
      this._syncInfo.internalValue = value.syncInfo;
      this._syncStats.internalValue = value.syncStats;
    }
  }

  // gslb_info - computed: false, optional: true, required: false
  private _gslbInfo = new GslbsmruntimeRemoteInfoGslbInfoList(this, "gslb_info", true);
  public get gslbInfo() {
    return this._gslbInfo;
  }
  public putGslbInfo(value: GslbsmruntimeRemoteInfoGslbInfo[] | cdktf.IResolvable) {
    this._gslbInfo.internalValue = value;
  }
  public resetGslbInfo() {
    this._gslbInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbInfoInput() {
    return this._gslbInfo.internalValue;
  }

  // ops_info - computed: false, optional: true, required: false
  private _opsInfo = new GslbsmruntimeRemoteInfoOpsInfoList(this, "ops_info", true);
  public get opsInfo() {
    return this._opsInfo;
  }
  public putOpsInfo(value: GslbsmruntimeRemoteInfoOpsInfo[] | cdktf.IResolvable) {
    this._opsInfo.internalValue = value;
  }
  public resetOpsInfo() {
    this._opsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsInfoInput() {
    return this._opsInfo.internalValue;
  }

  // sync_info - computed: false, optional: true, required: false
  private _syncInfo = new GslbsmruntimeRemoteInfoSyncInfoList(this, "sync_info", true);
  public get syncInfo() {
    return this._syncInfo;
  }
  public putSyncInfo(value: GslbsmruntimeRemoteInfoSyncInfo[] | cdktf.IResolvable) {
    this._syncInfo.internalValue = value;
  }
  public resetSyncInfo() {
    this._syncInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInfoInput() {
    return this._syncInfo.internalValue;
  }

  // sync_stats - computed: false, optional: true, required: false
  private _syncStats = new GslbsmruntimeRemoteInfoSyncStatsList(this, "sync_stats", true);
  public get syncStats() {
    return this._syncStats;
  }
  public putSyncStats(value: GslbsmruntimeRemoteInfoSyncStats[] | cdktf.IResolvable) {
    this._syncStats.internalValue = value;
  }
  public resetSyncStats() {
    this._syncStats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStatsInput() {
    return this._syncStats.internalValue;
  }
}

export class GslbsmruntimeRemoteInfoList extends cdktf.ComplexList {
  public internalValue? : GslbsmruntimeRemoteInfo[] | cdktf.IResolvable

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
  public get(index: number): GslbsmruntimeRemoteInfoOutputReference {
    return new GslbsmruntimeRemoteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime avi_gslbsmruntime}
*/
export class Gslbsmruntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_gslbsmruntime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbsmruntime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbsmruntime to import
  * @param importFromId The id of the existing Gslbsmruntime that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbsmruntime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_gslbsmruntime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/gslbsmruntime avi_gslbsmruntime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbsmruntimeConfig
  */
  public constructor(scope: Construct, id: string, config: GslbsmruntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_gslbsmruntime',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterLeader = config.clusterLeader;
    this._clusterUuid = config.clusterUuid;
    this._enabled = config.enabled;
    this._healthMonitorInfo = config.healthMonitorInfo;
    this._id = config.id;
    this._leaderClusterUuid = config.leaderClusterUuid;
    this._memberType = config.memberType;
    this._name = config.name;
    this._nodeUuid = config.nodeUuid;
    this._numOfRetries = config.numOfRetries;
    this._objUuid = config.objUuid;
    this._role = config.role;
    this._siteName = config.siteName;
    this._siteType = config.siteType;
    this._state = config.state;
    this._swVersion = config.swVersion;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._viewId = config.viewId;
    this._dnsConfigs.internalValue = config.dnsConfigs;
    this._dnsInfo.internalValue = config.dnsInfo;
    this._events.internalValue = config.events;
    this._operStatus.internalValue = config.operStatus;
    this._remoteInfo.internalValue = config.remoteInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_leader - computed: true, optional: true, required: false
  private _clusterLeader?: string; 
  public get clusterLeader() {
    return this.getStringAttribute('cluster_leader');
  }
  public set clusterLeader(value: string) {
    this._clusterLeader = value;
  }
  public resetClusterLeader() {
    this._clusterLeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLeaderInput() {
    return this._clusterLeader;
  }

  // cluster_uuid - computed: true, optional: true, required: false
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  public resetClusterUuid() {
    this._clusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // health_monitor_info - computed: true, optional: true, required: false
  private _healthMonitorInfo?: string; 
  public get healthMonitorInfo() {
    return this.getStringAttribute('health_monitor_info');
  }
  public set healthMonitorInfo(value: string) {
    this._healthMonitorInfo = value;
  }
  public resetHealthMonitorInfo() {
    this._healthMonitorInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitorInfoInput() {
    return this._healthMonitorInfo;
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

  // leader_cluster_uuid - computed: false, optional: false, required: true
  private _leaderClusterUuid?: string; 
  public get leaderClusterUuid() {
    return this.getStringAttribute('leader_cluster_uuid');
  }
  public set leaderClusterUuid(value: string) {
    this._leaderClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderClusterUuidInput() {
    return this._leaderClusterUuid;
  }

  // member_type - computed: false, optional: true, required: false
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  public resetMemberType() {
    this._memberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
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

  // node_uuid - computed: true, optional: true, required: false
  private _nodeUuid?: string; 
  public get nodeUuid() {
    return this.getStringAttribute('node_uuid');
  }
  public set nodeUuid(value: string) {
    this._nodeUuid = value;
  }
  public resetNodeUuid() {
    this._nodeUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeUuidInput() {
    return this._nodeUuid;
  }

  // num_of_retries - computed: false, optional: true, required: false
  private _numOfRetries?: string; 
  public get numOfRetries() {
    return this.getStringAttribute('num_of_retries');
  }
  public set numOfRetries(value: string) {
    this._numOfRetries = value;
  }
  public resetNumOfRetries() {
    this._numOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfRetriesInput() {
    return this._numOfRetries;
  }

  // obj_uuid - computed: true, optional: true, required: false
  private _objUuid?: string; 
  public get objUuid() {
    return this.getStringAttribute('obj_uuid');
  }
  public set objUuid(value: string) {
    this._objUuid = value;
  }
  public resetObjUuid() {
    this._objUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objUuidInput() {
    return this._objUuid;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // site_name - computed: true, optional: true, required: false
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  public resetSiteName() {
    this._siteName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // site_type - computed: true, optional: true, required: false
  private _siteType?: string; 
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
  public set siteType(value: string) {
    this._siteType = value;
  }
  public resetSiteType() {
    this._siteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypeInput() {
    return this._siteType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
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

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // dns_configs - computed: false, optional: true, required: false
  private _dnsConfigs = new GslbsmruntimeDnsConfigsList(this, "dns_configs", false);
  public get dnsConfigs() {
    return this._dnsConfigs;
  }
  public putDnsConfigs(value: GslbsmruntimeDnsConfigs[] | cdktf.IResolvable) {
    this._dnsConfigs.internalValue = value;
  }
  public resetDnsConfigs() {
    this._dnsConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigsInput() {
    return this._dnsConfigs.internalValue;
  }

  // dns_info - computed: false, optional: true, required: false
  private _dnsInfo = new GslbsmruntimeDnsInfoList(this, "dns_info", true);
  public get dnsInfo() {
    return this._dnsInfo;
  }
  public putDnsInfo(value: GslbsmruntimeDnsInfo[] | cdktf.IResolvable) {
    this._dnsInfo.internalValue = value;
  }
  public resetDnsInfo() {
    this._dnsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInfoInput() {
    return this._dnsInfo.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new GslbsmruntimeEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: GslbsmruntimeEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // oper_status - computed: false, optional: true, required: false
  private _operStatus = new GslbsmruntimeOperStatusList(this, "oper_status", true);
  public get operStatus() {
    return this._operStatus;
  }
  public putOperStatus(value: GslbsmruntimeOperStatus[] | cdktf.IResolvable) {
    this._operStatus.internalValue = value;
  }
  public resetOperStatus() {
    this._operStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operStatusInput() {
    return this._operStatus.internalValue;
  }

  // remote_info - computed: false, optional: true, required: false
  private _remoteInfo = new GslbsmruntimeRemoteInfoList(this, "remote_info", true);
  public get remoteInfo() {
    return this._remoteInfo;
  }
  public putRemoteInfo(value: GslbsmruntimeRemoteInfo[] | cdktf.IResolvable) {
    this._remoteInfo.internalValue = value;
  }
  public resetRemoteInfo() {
    this._remoteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInfoInput() {
    return this._remoteInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_leader: cdktf.stringToTerraform(this._clusterLeader),
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      enabled: cdktf.stringToTerraform(this._enabled),
      health_monitor_info: cdktf.stringToTerraform(this._healthMonitorInfo),
      id: cdktf.stringToTerraform(this._id),
      leader_cluster_uuid: cdktf.stringToTerraform(this._leaderClusterUuid),
      member_type: cdktf.stringToTerraform(this._memberType),
      name: cdktf.stringToTerraform(this._name),
      node_uuid: cdktf.stringToTerraform(this._nodeUuid),
      num_of_retries: cdktf.stringToTerraform(this._numOfRetries),
      obj_uuid: cdktf.stringToTerraform(this._objUuid),
      role: cdktf.stringToTerraform(this._role),
      site_name: cdktf.stringToTerraform(this._siteName),
      site_type: cdktf.stringToTerraform(this._siteType),
      state: cdktf.stringToTerraform(this._state),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      view_id: cdktf.stringToTerraform(this._viewId),
      dns_configs: cdktf.listMapper(gslbsmruntimeDnsConfigsToTerraform, true)(this._dnsConfigs.internalValue),
      dns_info: cdktf.listMapper(gslbsmruntimeDnsInfoToTerraform, true)(this._dnsInfo.internalValue),
      events: cdktf.listMapper(gslbsmruntimeEventsToTerraform, true)(this._events.internalValue),
      oper_status: cdktf.listMapper(gslbsmruntimeOperStatusToTerraform, true)(this._operStatus.internalValue),
      remote_info: cdktf.listMapper(gslbsmruntimeRemoteInfoToTerraform, true)(this._remoteInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_leader: {
        value: cdktf.stringToHclTerraform(this._clusterLeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_monitor_info: {
        value: cdktf.stringToHclTerraform(this._healthMonitorInfo),
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
      leader_cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._leaderClusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_type: {
        value: cdktf.stringToHclTerraform(this._memberType),
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
      node_uuid: {
        value: cdktf.stringToHclTerraform(this._nodeUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_retries: {
        value: cdktf.stringToHclTerraform(this._numOfRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obj_uuid: {
        value: cdktf.stringToHclTerraform(this._objUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_type: {
        value: cdktf.stringToHclTerraform(this._siteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sw_version: {
        value: cdktf.stringToHclTerraform(this._swVersion),
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
      view_id: {
        value: cdktf.stringToHclTerraform(this._viewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_configs: {
        value: cdktf.listMapperHcl(gslbsmruntimeDnsConfigsToHclTerraform, true)(this._dnsConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbsmruntimeDnsConfigsList",
      },
      dns_info: {
        value: cdktf.listMapperHcl(gslbsmruntimeDnsInfoToHclTerraform, true)(this._dnsInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbsmruntimeDnsInfoList",
      },
      events: {
        value: cdktf.listMapperHcl(gslbsmruntimeEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbsmruntimeEventsList",
      },
      oper_status: {
        value: cdktf.listMapperHcl(gslbsmruntimeOperStatusToHclTerraform, true)(this._operStatus.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbsmruntimeOperStatusList",
      },
      remote_info: {
        value: cdktf.listMapperHcl(gslbsmruntimeRemoteInfoToHclTerraform, true)(this._remoteInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GslbsmruntimeRemoteInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
