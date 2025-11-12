// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclMlbOperationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#commit_datetime DataEclMlbOperationV1#commit_datetime}
  */
  readonly commitDatetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#error DataEclMlbOperationV1#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#id DataEclMlbOperationV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#reception_datetime DataEclMlbOperationV1#reception_datetime}
  */
  readonly receptionDatetime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#request_id DataEclMlbOperationV1#request_id}
  */
  readonly requestId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#request_types DataEclMlbOperationV1#request_types}
  */
  readonly requestTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#resource_id DataEclMlbOperationV1#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#resource_type DataEclMlbOperationV1#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#status DataEclMlbOperationV1#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#tenant_id DataEclMlbOperationV1#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#warning DataEclMlbOperationV1#warning}
  */
  readonly warning?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1 ecl_mlb_operation_v1}
*/
export class DataEclMlbOperationV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_mlb_operation_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclMlbOperationV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclMlbOperationV1 to import
  * @param importFromId The id of the existing DataEclMlbOperationV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclMlbOperationV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_mlb_operation_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/mlb_operation_v1 ecl_mlb_operation_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclMlbOperationV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclMlbOperationV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_mlb_operation_v1',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commitDatetime = config.commitDatetime;
    this._error = config.error;
    this._id = config.id;
    this._receptionDatetime = config.receptionDatetime;
    this._requestId = config.requestId;
    this._requestTypes = config.requestTypes;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._status = config.status;
    this._tenantId = config.tenantId;
    this._warning = config.warning;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commit_datetime - computed: true, optional: true, required: false
  private _commitDatetime?: string; 
  public get commitDatetime() {
    return this.getStringAttribute('commit_datetime');
  }
  public set commitDatetime(value: string) {
    this._commitDatetime = value;
  }
  public resetCommitDatetime() {
    this._commitDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitDatetimeInput() {
    return this._commitDatetime;
  }

  // error - computed: true, optional: true, required: false
  private _error?: string; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
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

  // reception_datetime - computed: true, optional: true, required: false
  private _receptionDatetime?: string; 
  public get receptionDatetime() {
    return this.getStringAttribute('reception_datetime');
  }
  public set receptionDatetime(value: string) {
    this._receptionDatetime = value;
  }
  public resetReceptionDatetime() {
    this._receptionDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receptionDatetimeInput() {
    return this._receptionDatetime;
  }

  // request_id - computed: true, optional: true, required: false
  private _requestId?: string; 
  public get requestId() {
    return this.getStringAttribute('request_id');
  }
  public set requestId(value: string) {
    this._requestId = value;
  }
  public resetRequestId() {
    this._requestId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIdInput() {
    return this._requestId;
  }

  // request_types - computed: true, optional: true, required: false
  private _requestTypes?: string[]; 
  public get requestTypes() {
    return this.getListAttribute('request_types');
  }
  public set requestTypes(value: string[]) {
    this._requestTypes = value;
  }
  public resetRequestTypes() {
    this._requestTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypesInput() {
    return this._requestTypes;
  }

  // resource_id - computed: true, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
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

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // warning - computed: true, optional: true, required: false
  private _warning?: string; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commit_datetime: cdktf.stringToTerraform(this._commitDatetime),
      error: cdktf.stringToTerraform(this._error),
      id: cdktf.stringToTerraform(this._id),
      reception_datetime: cdktf.stringToTerraform(this._receptionDatetime),
      request_id: cdktf.stringToTerraform(this._requestId),
      request_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requestTypes),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      warning: cdktf.stringToTerraform(this._warning),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commit_datetime: {
        value: cdktf.stringToHclTerraform(this._commitDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error: {
        value: cdktf.stringToHclTerraform(this._error),
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
      reception_datetime: {
        value: cdktf.stringToHclTerraform(this._receptionDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_id: {
        value: cdktf.stringToHclTerraform(this._requestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requestTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warning: {
        value: cdktf.stringToHclTerraform(this._warning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
