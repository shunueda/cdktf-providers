// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaApplicationSegmentBrowserAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#id DataZpaApplicationSegmentBrowserAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#match_style DataZpaApplicationSegmentBrowserAccess#match_style}
  */
  readonly matchStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#microtenant_id DataZpaApplicationSegmentBrowserAccess#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#name DataZpaApplicationSegmentBrowserAccess#name}
  */
  readonly name?: string;
  /**
  * tcp_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#tcp_port_range DataZpaApplicationSegmentBrowserAccess#tcp_port_range}
  */
  readonly tcpPortRange?: DataZpaApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable;
  /**
  * udp_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#udp_port_range DataZpaApplicationSegmentBrowserAccess#udp_port_range}
  */
  readonly udpPortRange?: DataZpaApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable;
}
export interface DataZpaApplicationSegmentBrowserAccessClientlessApps {
}

export function dataZpaApplicationSegmentBrowserAccessClientlessAppsToTerraform(struct?: DataZpaApplicationSegmentBrowserAccessClientlessApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaApplicationSegmentBrowserAccessClientlessAppsToHclTerraform(struct?: DataZpaApplicationSegmentBrowserAccessClientlessApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaApplicationSegmentBrowserAccessClientlessAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentBrowserAccessClientlessApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentBrowserAccessClientlessApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_options - computed: true, optional: false, required: false
  public get allowOptions() {
    return this.getBooleanAttribute('allow_options');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // application_port - computed: true, optional: false, required: false
  public get applicationPort() {
    return this.getStringAttribute('application_port');
  }

  // application_protocol - computed: true, optional: false, required: false
  public get applicationProtocol() {
    return this.getStringAttribute('application_protocol');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // ext_domain - computed: true, optional: false, required: false
  public get extDomain() {
    return this.getStringAttribute('ext_domain');
  }

  // ext_label - computed: true, optional: false, required: false
  public get extLabel() {
    return this.getStringAttribute('ext_label');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_domain - computed: true, optional: false, required: false
  public get localDomain() {
    return this.getStringAttribute('local_domain');
  }

  // microtenant_id - computed: true, optional: false, required: false
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // trust_untrusted_cert - computed: true, optional: false, required: false
  public get trustUntrustedCert() {
    return this.getBooleanAttribute('trust_untrusted_cert');
  }
}

export class DataZpaApplicationSegmentBrowserAccessClientlessAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaApplicationSegmentBrowserAccessClientlessAppsOutputReference {
    return new DataZpaApplicationSegmentBrowserAccessClientlessAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaApplicationSegmentBrowserAccessServerGroups {
}

export function dataZpaApplicationSegmentBrowserAccessServerGroupsToTerraform(struct?: DataZpaApplicationSegmentBrowserAccessServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaApplicationSegmentBrowserAccessServerGroupsToHclTerraform(struct?: DataZpaApplicationSegmentBrowserAccessServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaApplicationSegmentBrowserAccessServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentBrowserAccessServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentBrowserAccessServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getListAttribute('id');
  }
}

export class DataZpaApplicationSegmentBrowserAccessServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaApplicationSegmentBrowserAccessServerGroupsOutputReference {
    return new DataZpaApplicationSegmentBrowserAccessServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaApplicationSegmentBrowserAccessTcpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#from DataZpaApplicationSegmentBrowserAccess#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#to DataZpaApplicationSegmentBrowserAccess#to}
  */
  readonly to?: string;
}

export function dataZpaApplicationSegmentBrowserAccessTcpPortRangeToTerraform(struct?: DataZpaApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataZpaApplicationSegmentBrowserAccessTcpPortRangeToHclTerraform(struct?: DataZpaApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZpaApplicationSegmentBrowserAccessTcpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentBrowserAccessTcpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataZpaApplicationSegmentBrowserAccessTcpPortRangeList extends cdktf.ComplexList {
  public internalValue? : DataZpaApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable

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
  public get(index: number): DataZpaApplicationSegmentBrowserAccessTcpPortRangeOutputReference {
    return new DataZpaApplicationSegmentBrowserAccessTcpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaApplicationSegmentBrowserAccessUdpPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#from DataZpaApplicationSegmentBrowserAccess#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#to DataZpaApplicationSegmentBrowserAccess#to}
  */
  readonly to?: string;
}

export function dataZpaApplicationSegmentBrowserAccessUdpPortRangeToTerraform(struct?: DataZpaApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function dataZpaApplicationSegmentBrowserAccessUdpPortRangeToHclTerraform(struct?: DataZpaApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZpaApplicationSegmentBrowserAccessUdpPortRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaApplicationSegmentBrowserAccessUdpPortRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class DataZpaApplicationSegmentBrowserAccessUdpPortRangeList extends cdktf.ComplexList {
  public internalValue? : DataZpaApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable

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
  public get(index: number): DataZpaApplicationSegmentBrowserAccessUdpPortRangeOutputReference {
    return new DataZpaApplicationSegmentBrowserAccessUdpPortRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access zpa_application_segment_browser_access}
*/
export class DataZpaApplicationSegmentBrowserAccess extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_application_segment_browser_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaApplicationSegmentBrowserAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaApplicationSegmentBrowserAccess to import
  * @param importFromId The id of the existing DataZpaApplicationSegmentBrowserAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaApplicationSegmentBrowserAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_application_segment_browser_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/data-sources/application_segment_browser_access zpa_application_segment_browser_access} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaApplicationSegmentBrowserAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaApplicationSegmentBrowserAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_application_segment_browser_access',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
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
    this._matchStyle = config.matchStyle;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._tcpPortRange.internalValue = config.tcpPortRange;
    this._udpPortRange.internalValue = config.udpPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bypass_type - computed: true, optional: false, required: false
  public get bypassType() {
    return this.getStringAttribute('bypass_type');
  }

  // clientless_apps - computed: true, optional: false, required: false
  private _clientlessApps = new DataZpaApplicationSegmentBrowserAccessClientlessAppsList(this, "clientless_apps", false);
  public get clientlessApps() {
    return this._clientlessApps;
  }

  // config_space - computed: true, optional: false, required: false
  public get configSpace() {
    return this.getStringAttribute('config_space');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }

  // double_encrypt - computed: true, optional: false, required: false
  public get doubleEncrypt() {
    return this.getBooleanAttribute('double_encrypt');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // health_reporting - computed: true, optional: false, required: false
  public get healthReporting() {
    return this.getStringAttribute('health_reporting');
  }

  // id - computed: false, optional: true, required: false
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

  // ip_anchored - computed: true, optional: false, required: false
  public get ipAnchored() {
    return this.getBooleanAttribute('ip_anchored');
  }

  // is_cname_enabled - computed: true, optional: false, required: false
  public get isCnameEnabled() {
    return this.getBooleanAttribute('is_cname_enabled');
  }

  // match_style - computed: true, optional: true, required: false
  private _matchStyle?: string; 
  public get matchStyle() {
    return this.getStringAttribute('match_style');
  }
  public set matchStyle(value: string) {
    this._matchStyle = value;
  }
  public resetMatchStyle() {
    this._matchStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchStyleInput() {
    return this._matchStyle;
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // name - computed: false, optional: true, required: false
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

  // passive_health_enabled - computed: true, optional: false, required: false
  public get passiveHealthEnabled() {
    return this.getBooleanAttribute('passive_health_enabled');
  }

  // segment_group_id - computed: true, optional: false, required: false
  public get segmentGroupId() {
    return this.getStringAttribute('segment_group_id');
  }

  // segment_group_name - computed: true, optional: false, required: false
  public get segmentGroupName() {
    return this.getStringAttribute('segment_group_name');
  }

  // server_groups - computed: true, optional: false, required: false
  private _serverGroups = new DataZpaApplicationSegmentBrowserAccessServerGroupsList(this, "server_groups", true);
  public get serverGroups() {
    return this._serverGroups;
  }

  // tcp_port_ranges - computed: true, optional: false, required: false
  public get tcpPortRanges() {
    return this.getListAttribute('tcp_port_ranges');
  }

  // udp_port_ranges - computed: true, optional: false, required: false
  public get udpPortRanges() {
    return this.getListAttribute('udp_port_ranges');
  }

  // tcp_port_range - computed: false, optional: true, required: false
  private _tcpPortRange = new DataZpaApplicationSegmentBrowserAccessTcpPortRangeList(this, "tcp_port_range", true);
  public get tcpPortRange() {
    return this._tcpPortRange;
  }
  public putTcpPortRange(value: DataZpaApplicationSegmentBrowserAccessTcpPortRange[] | cdktf.IResolvable) {
    this._tcpPortRange.internalValue = value;
  }
  public resetTcpPortRange() {
    this._tcpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortRangeInput() {
    return this._tcpPortRange.internalValue;
  }

  // udp_port_range - computed: false, optional: true, required: false
  private _udpPortRange = new DataZpaApplicationSegmentBrowserAccessUdpPortRangeList(this, "udp_port_range", true);
  public get udpPortRange() {
    return this._udpPortRange;
  }
  public putUdpPortRange(value: DataZpaApplicationSegmentBrowserAccessUdpPortRange[] | cdktf.IResolvable) {
    this._udpPortRange.internalValue = value;
  }
  public resetUdpPortRange() {
    this._udpPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortRangeInput() {
    return this._udpPortRange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      match_style: cdktf.stringToTerraform(this._matchStyle),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      tcp_port_range: cdktf.listMapper(dataZpaApplicationSegmentBrowserAccessTcpPortRangeToTerraform, true)(this._tcpPortRange.internalValue),
      udp_port_range: cdktf.listMapper(dataZpaApplicationSegmentBrowserAccessUdpPortRangeToTerraform, true)(this._udpPortRange.internalValue),
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
      match_style: {
        value: cdktf.stringToHclTerraform(this._matchStyle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      tcp_port_range: {
        value: cdktf.listMapperHcl(dataZpaApplicationSegmentBrowserAccessTcpPortRangeToHclTerraform, true)(this._tcpPortRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZpaApplicationSegmentBrowserAccessTcpPortRangeList",
      },
      udp_port_range: {
        value: cdktf.listMapperHcl(dataZpaApplicationSegmentBrowserAccessUdpPortRangeToHclTerraform, true)(this._udpPortRange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataZpaApplicationSegmentBrowserAccessUdpPortRangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
