// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFabricLakehouseTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Lakehouse ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#lakehouse_id DataFabricLakehouseTable#lakehouse_id}
  */
  readonly lakehouseId: string;
  /**
  * The Name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#name DataFabricLakehouseTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#timeouts DataFabricLakehouseTable#timeouts}
  */
  readonly timeouts?: DataFabricLakehouseTableTimeouts;
  /**
  * The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#workspace_id DataFabricLakehouseTable#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DataFabricLakehouseTableTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#read DataFabricLakehouseTable#read}
  */
  readonly read?: string;
}

export function dataFabricLakehouseTableTimeoutsToTerraform(struct?: DataFabricLakehouseTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataFabricLakehouseTableTimeoutsToHclTerraform(struct?: DataFabricLakehouseTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFabricLakehouseTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFabricLakehouseTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFabricLakehouseTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table fabric_lakehouse_table}
*/
export class DataFabricLakehouseTable extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_lakehouse_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFabricLakehouseTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFabricLakehouseTable to import
  * @param importFromId The id of the existing DataFabricLakehouseTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFabricLakehouseTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_lakehouse_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/data-sources/lakehouse_table fabric_lakehouse_table} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFabricLakehouseTableConfig
  */
  public constructor(scope: Construct, id: string, config: DataFabricLakehouseTableConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_lakehouse_table',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._lakehouseId = config.lakehouseId;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // lakehouse_id - computed: false, optional: false, required: true
  private _lakehouseId?: string; 
  public get lakehouseId() {
    return this.getStringAttribute('lakehouse_id');
  }
  public set lakehouseId(value: string) {
    this._lakehouseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakehouseIdInput() {
    return this._lakehouseId;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFabricLakehouseTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFabricLakehouseTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      lakehouse_id: cdktf.stringToTerraform(this._lakehouseId),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataFabricLakehouseTableTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      lakehouse_id: {
        value: cdktf.stringToHclTerraform(this._lakehouseId),
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
      timeouts: {
        value: dataFabricLakehouseTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFabricLakehouseTableTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
