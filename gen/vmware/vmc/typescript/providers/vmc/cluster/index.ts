// https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The EDRS policy type. This can either be 'cost', 'performance', 'storage-scaleup' or 'rapid-scaleup'. Default : storage-scaleup. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#edrs_policy_type Cluster#edrs_policy_type}
  */
  readonly edrsPolicyType?: string;
  /**
  * True if EDRS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#enable_edrs Cluster#enable_edrs}
  */
  readonly enableEdrs?: boolean | cdktf.IResolvable;
  /**
  * Customize CPU cores on hosts in a cluster. Specify number of cores to be enabled on hosts in a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#host_cpu_cores_count Cluster#host_cpu_cores_count}
  */
  readonly hostCpuCoresCount?: number;
  /**
  * The instance type for the esx hosts added to this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#host_instance_type Cluster#host_instance_type}
  */
  readonly hostInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of hosts that the cluster can scale out to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#max_hosts Cluster#max_hosts}
  */
  readonly maxHosts?: number;
  /**
  * The minimum number of hosts that the cluster can scale in to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#min_hosts Cluster#min_hosts}
  */
  readonly minHosts?: number;
  /**
  * The number of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#num_hosts Cluster#num_hosts}
  */
  readonly numHosts: number;
  /**
  * SDDC identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#sddc_id Cluster#sddc_id}
  */
  readonly sddcId: string;
  /**
  * microsoft_licensing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#microsoft_licensing_config Cluster#microsoft_licensing_config}
  */
  readonly microsoftLicensingConfig?: ClusterMicrosoftLicensingConfig[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#timeouts Cluster#timeouts}
  */
  readonly timeouts?: ClusterTimeouts;
}
export interface ClusterMicrosoftLicensingConfig {
  /**
  * Flag to identify if it is Academic Standard or Commercial Standard License.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#academic_license Cluster#academic_license}
  */
  readonly academicLicense?: boolean | cdktf.IResolvable;
  /**
  * The status of MSSQL licensing for this SDDC’s clusters. Possible values : enabled, ENABLED, disabled, DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#mssql_licensing Cluster#mssql_licensing}
  */
  readonly mssqlLicensing?: string;
  /**
  * The status of Windows licensing for this SDDC's clusters. Possible values : enabled, ENABLED, disabled, DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#windows_licensing Cluster#windows_licensing}
  */
  readonly windowsLicensing?: string;
}

export function clusterMicrosoftLicensingConfigToTerraform(struct?: ClusterMicrosoftLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    academic_license: cdktf.booleanToTerraform(struct!.academicLicense),
    mssql_licensing: cdktf.stringToTerraform(struct!.mssqlLicensing),
    windows_licensing: cdktf.stringToTerraform(struct!.windowsLicensing),
  }
}


export function clusterMicrosoftLicensingConfigToHclTerraform(struct?: ClusterMicrosoftLicensingConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    academic_license: {
      value: cdktf.booleanToHclTerraform(struct!.academicLicense),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mssql_licensing: {
      value: cdktf.stringToHclTerraform(struct!.mssqlLicensing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_licensing: {
      value: cdktf.stringToHclTerraform(struct!.windowsLicensing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterMicrosoftLicensingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterMicrosoftLicensingConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._academicLicense !== undefined) {
      hasAnyValues = true;
      internalValueResult.academicLicense = this._academicLicense;
    }
    if (this._mssqlLicensing !== undefined) {
      hasAnyValues = true;
      internalValueResult.mssqlLicensing = this._mssqlLicensing;
    }
    if (this._windowsLicensing !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsLicensing = this._windowsLicensing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterMicrosoftLicensingConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._academicLicense = undefined;
      this._mssqlLicensing = undefined;
      this._windowsLicensing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._academicLicense = value.academicLicense;
      this._mssqlLicensing = value.mssqlLicensing;
      this._windowsLicensing = value.windowsLicensing;
    }
  }

  // academic_license - computed: false, optional: true, required: false
  private _academicLicense?: boolean | cdktf.IResolvable; 
  public get academicLicense() {
    return this.getBooleanAttribute('academic_license');
  }
  public set academicLicense(value: boolean | cdktf.IResolvable) {
    this._academicLicense = value;
  }
  public resetAcademicLicense() {
    this._academicLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get academicLicenseInput() {
    return this._academicLicense;
  }

  // mssql_licensing - computed: false, optional: true, required: false
  private _mssqlLicensing?: string; 
  public get mssqlLicensing() {
    return this.getStringAttribute('mssql_licensing');
  }
  public set mssqlLicensing(value: string) {
    this._mssqlLicensing = value;
  }
  public resetMssqlLicensing() {
    this._mssqlLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlLicensingInput() {
    return this._mssqlLicensing;
  }

  // windows_licensing - computed: false, optional: true, required: false
  private _windowsLicensing?: string; 
  public get windowsLicensing() {
    return this.getStringAttribute('windows_licensing');
  }
  public set windowsLicensing(value: string) {
    this._windowsLicensing = value;
  }
  public resetWindowsLicensing() {
    this._windowsLicensing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsLicensingInput() {
    return this._windowsLicensing;
  }
}

export class ClusterMicrosoftLicensingConfigList extends cdktf.ComplexList {
  public internalValue? : ClusterMicrosoftLicensingConfig[] | cdktf.IResolvable

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
  public get(index: number): ClusterMicrosoftLicensingConfigOutputReference {
    return new ClusterMicrosoftLicensingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#delete Cluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#update Cluster#update}
  */
  readonly update?: string;
}

export function clusterTimeoutsToTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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


export function clusterTimeoutsToHclTerraform(struct?: ClusterTimeouts | cdktf.IResolvable): any {
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

export class ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster vmc_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.6/docs/resources/cluster vmc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.6',
        providerVersionConstraint: '1.15.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._edrsPolicyType = config.edrsPolicyType;
    this._enableEdrs = config.enableEdrs;
    this._hostCpuCoresCount = config.hostCpuCoresCount;
    this._hostInstanceType = config.hostInstanceType;
    this._id = config.id;
    this._maxHosts = config.maxHosts;
    this._minHosts = config.minHosts;
    this._numHosts = config.numHosts;
    this._sddcId = config.sddcId;
    this._microsoftLicensingConfig.internalValue = config.microsoftLicensingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_info - computed: true, optional: false, required: false
  private _clusterInfo = new cdktf.StringMap(this, "cluster_info");
  public get clusterInfo() {
    return this._clusterInfo;
  }

  // edrs_policy_type - computed: true, optional: true, required: false
  private _edrsPolicyType?: string; 
  public get edrsPolicyType() {
    return this.getStringAttribute('edrs_policy_type');
  }
  public set edrsPolicyType(value: string) {
    this._edrsPolicyType = value;
  }
  public resetEdrsPolicyType() {
    this._edrsPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edrsPolicyTypeInput() {
    return this._edrsPolicyType;
  }

  // enable_edrs - computed: true, optional: true, required: false
  private _enableEdrs?: boolean | cdktf.IResolvable; 
  public get enableEdrs() {
    return this.getBooleanAttribute('enable_edrs');
  }
  public set enableEdrs(value: boolean | cdktf.IResolvable) {
    this._enableEdrs = value;
  }
  public resetEnableEdrs() {
    this._enableEdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdrsInput() {
    return this._enableEdrs;
  }

  // host_cpu_cores_count - computed: false, optional: true, required: false
  private _hostCpuCoresCount?: number; 
  public get hostCpuCoresCount() {
    return this.getNumberAttribute('host_cpu_cores_count');
  }
  public set hostCpuCoresCount(value: number) {
    this._hostCpuCoresCount = value;
  }
  public resetHostCpuCoresCount() {
    this._hostCpuCoresCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostCpuCoresCountInput() {
    return this._hostCpuCoresCount;
  }

  // host_instance_type - computed: false, optional: true, required: false
  private _hostInstanceType?: string; 
  public get hostInstanceType() {
    return this.getStringAttribute('host_instance_type');
  }
  public set hostInstanceType(value: string) {
    this._hostInstanceType = value;
  }
  public resetHostInstanceType() {
    this._hostInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInstanceTypeInput() {
    return this._hostInstanceType;
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

  // max_hosts - computed: true, optional: true, required: false
  private _maxHosts?: number; 
  public get maxHosts() {
    return this.getNumberAttribute('max_hosts');
  }
  public set maxHosts(value: number) {
    this._maxHosts = value;
  }
  public resetMaxHosts() {
    this._maxHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHostsInput() {
    return this._maxHosts;
  }

  // min_hosts - computed: true, optional: true, required: false
  private _minHosts?: number; 
  public get minHosts() {
    return this.getNumberAttribute('min_hosts');
  }
  public set minHosts(value: number) {
    this._minHosts = value;
  }
  public resetMinHosts() {
    this._minHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHostsInput() {
    return this._minHosts;
  }

  // num_hosts - computed: false, optional: false, required: true
  private _numHosts?: number; 
  public get numHosts() {
    return this.getNumberAttribute('num_hosts');
  }
  public set numHosts(value: number) {
    this._numHosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numHostsInput() {
    return this._numHosts;
  }

  // sddc_id - computed: false, optional: false, required: true
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
  }

  // microsoft_licensing_config - computed: false, optional: true, required: false
  private _microsoftLicensingConfig = new ClusterMicrosoftLicensingConfigList(this, "microsoft_licensing_config", false);
  public get microsoftLicensingConfig() {
    return this._microsoftLicensingConfig;
  }
  public putMicrosoftLicensingConfig(value: ClusterMicrosoftLicensingConfig[] | cdktf.IResolvable) {
    this._microsoftLicensingConfig.internalValue = value;
  }
  public resetMicrosoftLicensingConfig() {
    this._microsoftLicensingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftLicensingConfigInput() {
    return this._microsoftLicensingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTimeouts) {
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
      edrs_policy_type: cdktf.stringToTerraform(this._edrsPolicyType),
      enable_edrs: cdktf.booleanToTerraform(this._enableEdrs),
      host_cpu_cores_count: cdktf.numberToTerraform(this._hostCpuCoresCount),
      host_instance_type: cdktf.stringToTerraform(this._hostInstanceType),
      id: cdktf.stringToTerraform(this._id),
      max_hosts: cdktf.numberToTerraform(this._maxHosts),
      min_hosts: cdktf.numberToTerraform(this._minHosts),
      num_hosts: cdktf.numberToTerraform(this._numHosts),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      microsoft_licensing_config: cdktf.listMapper(clusterMicrosoftLicensingConfigToTerraform, true)(this._microsoftLicensingConfig.internalValue),
      timeouts: clusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edrs_policy_type: {
        value: cdktf.stringToHclTerraform(this._edrsPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_edrs: {
        value: cdktf.booleanToHclTerraform(this._enableEdrs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_cpu_cores_count: {
        value: cdktf.numberToHclTerraform(this._hostCpuCoresCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_instance_type: {
        value: cdktf.stringToHclTerraform(this._hostInstanceType),
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
      max_hosts: {
        value: cdktf.numberToHclTerraform(this._maxHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_hosts: {
        value: cdktf.numberToHclTerraform(this._minHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_hosts: {
        value: cdktf.numberToHclTerraform(this._numHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microsoft_licensing_config: {
        value: cdktf.listMapperHcl(clusterMicrosoftLicensingConfigToHclTerraform, true)(this._microsoftLicensingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterMicrosoftLicensingConfigList",
      },
      timeouts: {
        value: clusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
