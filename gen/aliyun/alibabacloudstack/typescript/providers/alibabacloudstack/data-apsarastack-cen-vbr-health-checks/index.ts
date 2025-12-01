// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackCenVbrHealthChecksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks#cen_id DataApsarastackCenVbrHealthChecks#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks#id DataApsarastackCenVbrHealthChecks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks#ids DataApsarastackCenVbrHealthChecks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks#vbr_instance_id DataApsarastackCenVbrHealthChecks#vbr_instance_id}
  */
  readonly vbrInstanceId?: string;
}
export interface DataApsarastackCenVbrHealthChecksVbrHealthChecks {
}

export function dataApsarastackCenVbrHealthChecksVbrHealthChecksToTerraform(struct?: DataApsarastackCenVbrHealthChecksVbrHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackCenVbrHealthChecksVbrHealthChecksToHclTerraform(struct?: DataApsarastackCenVbrHealthChecksVbrHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackCenVbrHealthChecksVbrHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApsarastackCenVbrHealthChecksVbrHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackCenVbrHealthChecksVbrHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_only - computed: true, optional: false, required: false
  public get healthCheckOnly() {
    return this.getBooleanAttribute('health_check_only');
  }

  // health_check_source_ip - computed: true, optional: false, required: false
  public get healthCheckSourceIp() {
    return this.getStringAttribute('health_check_source_ip');
  }

  // health_check_target_ip - computed: true, optional: false, required: false
  public get healthCheckTargetIp() {
    return this.getStringAttribute('health_check_target_ip');
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // vbr_instance_id - computed: true, optional: false, required: false
  public get vbrInstanceId() {
    return this.getStringAttribute('vbr_instance_id');
  }

  // vbr_instance_region_id - computed: true, optional: false, required: false
  public get vbrInstanceRegionId() {
    return this.getStringAttribute('vbr_instance_region_id');
  }
}

export class DataApsarastackCenVbrHealthChecksVbrHealthChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackCenVbrHealthChecksVbrHealthChecksOutputReference {
    return new DataApsarastackCenVbrHealthChecksVbrHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks apsarastack_cen_vbr_health_checks}
*/
export class DataApsarastackCenVbrHealthChecks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_cen_vbr_health_checks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackCenVbrHealthChecks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackCenVbrHealthChecks to import
  * @param importFromId The id of the existing DataApsarastackCenVbrHealthChecks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackCenVbrHealthChecks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_cen_vbr_health_checks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_cen_vbr_health_checks apsarastack_cen_vbr_health_checks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackCenVbrHealthChecksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackCenVbrHealthChecksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_cen_vbr_health_checks',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._id = config.id;
    this._ids = config.ids;
    this._vbrInstanceId = config.vbrInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // vbr_health_checks - computed: true, optional: false, required: false
  private _vbrHealthChecks = new DataApsarastackCenVbrHealthChecksVbrHealthChecksList(this, "vbr_health_checks", false);
  public get vbrHealthChecks() {
    return this._vbrHealthChecks;
  }

  // vbr_instance_id - computed: false, optional: true, required: false
  private _vbrInstanceId?: string; 
  public get vbrInstanceId() {
    return this.getStringAttribute('vbr_instance_id');
  }
  public set vbrInstanceId(value: string) {
    this._vbrInstanceId = value;
  }
  public resetVbrInstanceId() {
    this._vbrInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vbrInstanceIdInput() {
    return this._vbrInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      vbr_instance_id: cdktf.stringToTerraform(this._vbrInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vbr_instance_id: {
        value: cdktf.stringToHclTerraform(this._vbrInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
