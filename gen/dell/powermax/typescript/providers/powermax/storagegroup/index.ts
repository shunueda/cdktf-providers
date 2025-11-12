// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * States whether compression is enabled on storage group. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#compression Storagegroup#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * Host IO limit of the storage group. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#host_io_limit Storagegroup#host_io_limit}
  */
  readonly hostIoLimit?: StoragegroupHostIoLimit;
  /**
  * The name of the storage group. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#name Storagegroup#name}
  */
  readonly name: string;
  /**
  * The number of volumes associated with the storage group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#num_of_vols Storagegroup#num_of_vols}
  */
  readonly numOfVols?: number;
  /**
  * The service level associated with the storage group. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#slo Storagegroup#slo}
  */
  readonly slo?: string;
  /**
  * The Srp to be associated with the Storage Group. If you dont want an SRP the srp_id can be set to 'None'. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#srp_id Storagegroup#srp_id}
  */
  readonly srpId: string;
  /**
  * The IDs of the volume associated with the storage group. Only pre-existing volumes are considered here. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#volume_ids Storagegroup#volume_ids}
  */
  readonly volumeIds?: string[];
  /**
  * The workload associated with the storage group. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#workload Storagegroup#workload}
  */
  readonly workload?: string;
}
export interface StoragegroupHostIoLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#dynamic_distribution Storagegroup#dynamic_distribution}
  */
  readonly dynamicDistribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#host_io_limit_io_sec Storagegroup#host_io_limit_io_sec}
  */
  readonly hostIoLimitIoSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#host_io_limit_mb_sec Storagegroup#host_io_limit_mb_sec}
  */
  readonly hostIoLimitMbSec?: string;
}

export function storagegroupHostIoLimitToTerraform(struct?: StoragegroupHostIoLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_distribution: cdktf.stringToTerraform(struct!.dynamicDistribution),
    host_io_limit_io_sec: cdktf.stringToTerraform(struct!.hostIoLimitIoSec),
    host_io_limit_mb_sec: cdktf.stringToTerraform(struct!.hostIoLimitMbSec),
  }
}


export function storagegroupHostIoLimitToHclTerraform(struct?: StoragegroupHostIoLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_distribution: {
      value: cdktf.stringToHclTerraform(struct!.dynamicDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_io_limit_io_sec: {
      value: cdktf.stringToHclTerraform(struct!.hostIoLimitIoSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_io_limit_mb_sec: {
      value: cdktf.stringToHclTerraform(struct!.hostIoLimitMbSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoragegroupHostIoLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StoragegroupHostIoLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDistribution = this._dynamicDistribution;
    }
    if (this._hostIoLimitIoSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIoLimitIoSec = this._hostIoLimitIoSec;
    }
    if (this._hostIoLimitMbSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIoLimitMbSec = this._hostIoLimitMbSec;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoragegroupHostIoLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicDistribution = undefined;
      this._hostIoLimitIoSec = undefined;
      this._hostIoLimitMbSec = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicDistribution = value.dynamicDistribution;
      this._hostIoLimitIoSec = value.hostIoLimitIoSec;
      this._hostIoLimitMbSec = value.hostIoLimitMbSec;
    }
  }

  // dynamic_distribution - computed: true, optional: true, required: false
  private _dynamicDistribution?: string; 
  public get dynamicDistribution() {
    return this.getStringAttribute('dynamic_distribution');
  }
  public set dynamicDistribution(value: string) {
    this._dynamicDistribution = value;
  }
  public resetDynamicDistribution() {
    this._dynamicDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDistributionInput() {
    return this._dynamicDistribution;
  }

  // host_io_limit_io_sec - computed: true, optional: true, required: false
  private _hostIoLimitIoSec?: string; 
  public get hostIoLimitIoSec() {
    return this.getStringAttribute('host_io_limit_io_sec');
  }
  public set hostIoLimitIoSec(value: string) {
    this._hostIoLimitIoSec = value;
  }
  public resetHostIoLimitIoSec() {
    this._hostIoLimitIoSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIoLimitIoSecInput() {
    return this._hostIoLimitIoSec;
  }

  // host_io_limit_mb_sec - computed: true, optional: true, required: false
  private _hostIoLimitMbSec?: string; 
  public get hostIoLimitMbSec() {
    return this.getStringAttribute('host_io_limit_mb_sec');
  }
  public set hostIoLimitMbSec(value: string) {
    this._hostIoLimitMbSec = value;
  }
  public resetHostIoLimitMbSec() {
    this._hostIoLimitMbSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIoLimitMbSecInput() {
    return this._hostIoLimitMbSec;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup powermax_storagegroup}
*/
export class Storagegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_storagegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Storagegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Storagegroup to import
  * @param importFromId The id of the existing Storagegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Storagegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_storagegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/storagegroup powermax_storagegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragegroupConfig
  */
  public constructor(scope: Construct, id: string, config: StoragegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_storagegroup',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3',
        providerVersionConstraint: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compression = config.compression;
    this._hostIoLimit.internalValue = config.hostIoLimit;
    this._name = config.name;
    this._numOfVols = config.numOfVols;
    this._slo = config.slo;
    this._srpId = config.srpId;
    this._volumeIds = config.volumeIds;
    this._workload = config.workload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cap_gb - computed: true, optional: false, required: false
  public get capGb() {
    return this.getNumberAttribute('cap_gb');
  }

  // child_storage_group - computed: true, optional: false, required: false
  public get childStorageGroup() {
    return this.getListAttribute('child_storage_group');
  }

  // compression - computed: true, optional: true, required: false
  private _compression?: boolean | cdktf.IResolvable; 
  public get compression() {
    return this.getBooleanAttribute('compression');
  }
  public set compression(value: boolean | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // compression_ratio - computed: true, optional: false, required: false
  public get compressionRatio() {
    return this.getStringAttribute('compression_ratio');
  }

  // compression_ratio_to_one - computed: true, optional: false, required: false
  public get compressionRatioToOne() {
    return this.getNumberAttribute('compression_ratio_to_one');
  }

  // device_emulation - computed: true, optional: false, required: false
  public get deviceEmulation() {
    return this.getStringAttribute('device_emulation');
  }

  // host_io_limit - computed: true, optional: true, required: false
  private _hostIoLimit = new StoragegroupHostIoLimitOutputReference(this, "host_io_limit");
  public get hostIoLimit() {
    return this._hostIoLimit;
  }
  public putHostIoLimit(value: StoragegroupHostIoLimit) {
    this._hostIoLimit.internalValue = value;
  }
  public resetHostIoLimit() {
    this._hostIoLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIoLimitInput() {
    return this._hostIoLimit.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maskingview - computed: true, optional: false, required: false
  public get maskingview() {
    return this.getListAttribute('maskingview');
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

  // num_of_child_sgs - computed: true, optional: false, required: false
  public get numOfChildSgs() {
    return this.getNumberAttribute('num_of_child_sgs');
  }

  // num_of_masking_views - computed: true, optional: false, required: false
  public get numOfMaskingViews() {
    return this.getNumberAttribute('num_of_masking_views');
  }

  // num_of_parent_sgs - computed: true, optional: false, required: false
  public get numOfParentSgs() {
    return this.getNumberAttribute('num_of_parent_sgs');
  }

  // num_of_snapshot_policies - computed: true, optional: false, required: false
  public get numOfSnapshotPolicies() {
    return this.getNumberAttribute('num_of_snapshot_policies');
  }

  // num_of_snapshots - computed: true, optional: false, required: false
  public get numOfSnapshots() {
    return this.getNumberAttribute('num_of_snapshots');
  }

  // num_of_vols - computed: true, optional: true, required: false
  private _numOfVols?: number; 
  public get numOfVols() {
    return this.getNumberAttribute('num_of_vols');
  }
  public set numOfVols(value: number) {
    this._numOfVols = value;
  }
  public resetNumOfVols() {
    this._numOfVols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfVolsInput() {
    return this._numOfVols;
  }

  // parent_storage_group - computed: true, optional: false, required: false
  public get parentStorageGroup() {
    return this.getListAttribute('parent_storage_group');
  }

  // service_level - computed: true, optional: false, required: false
  public get serviceLevel() {
    return this.getStringAttribute('service_level');
  }

  // slo - computed: true, optional: true, required: false
  private _slo?: string; 
  public get slo() {
    return this.getStringAttribute('slo');
  }
  public set slo(value: string) {
    this._slo = value;
  }
  public resetSlo() {
    this._slo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo;
  }

  // slo_compliance - computed: true, optional: false, required: false
  public get sloCompliance() {
    return this.getStringAttribute('slo_compliance');
  }

  // snapshot_policies - computed: true, optional: false, required: false
  public get snapshotPolicies() {
    return this.getListAttribute('snapshot_policies');
  }

  // srp_id - computed: false, optional: false, required: true
  private _srpId?: string; 
  public get srpId() {
    return this.getStringAttribute('srp_id');
  }
  public set srpId(value: string) {
    this._srpId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srpIdInput() {
    return this._srpId;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unprotected - computed: true, optional: false, required: false
  public get unprotected() {
    return this.getBooleanAttribute('unprotected');
  }

  // unreducible_data_gb - computed: true, optional: false, required: false
  public get unreducibleDataGb() {
    return this.getNumberAttribute('unreducible_data_gb');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // volume_ids - computed: true, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // vp_saved_percent - computed: true, optional: false, required: false
  public get vpSavedPercent() {
    return this.getNumberAttribute('vp_saved_percent');
  }

  // workload - computed: true, optional: true, required: false
  private _workload?: string; 
  public get workload() {
    return this.getStringAttribute('workload');
  }
  public set workload(value: string) {
    this._workload = value;
  }
  public resetWorkload() {
    this._workload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression: cdktf.booleanToTerraform(this._compression),
      host_io_limit: storagegroupHostIoLimitToTerraform(this._hostIoLimit.internalValue),
      name: cdktf.stringToTerraform(this._name),
      num_of_vols: cdktf.numberToTerraform(this._numOfVols),
      slo: cdktf.stringToTerraform(this._slo),
      srp_id: cdktf.stringToTerraform(this._srpId),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
      workload: cdktf.stringToTerraform(this._workload),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression: {
        value: cdktf.booleanToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_io_limit: {
        value: storagegroupHostIoLimitToHclTerraform(this._hostIoLimit.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StoragegroupHostIoLimit",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_of_vols: {
        value: cdktf.numberToHclTerraform(this._numOfVols),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slo: {
        value: cdktf.stringToHclTerraform(this._slo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srp_id: {
        value: cdktf.stringToHclTerraform(this._srpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workload: {
        value: cdktf.stringToHclTerraform(this._workload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
