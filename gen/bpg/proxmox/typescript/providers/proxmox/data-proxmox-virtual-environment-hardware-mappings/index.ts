// https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentHardwareMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the node whose configurations should be checked for correctness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings#check_node DataProxmoxVirtualEnvironmentHardwareMappings#check_node}
  */
  readonly checkNode?: string;
  /**
  * The type of the hardware mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings#type DataProxmoxVirtualEnvironmentHardwareMappings#type}
  */
  readonly type: string;
}
export interface DataProxmoxVirtualEnvironmentHardwareMappingsChecks {
}

export function dataProxmoxVirtualEnvironmentHardwareMappingsChecksToTerraform(struct?: DataProxmoxVirtualEnvironmentHardwareMappingsChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataProxmoxVirtualEnvironmentHardwareMappingsChecksToHclTerraform(struct?: DataProxmoxVirtualEnvironmentHardwareMappingsChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataProxmoxVirtualEnvironmentHardwareMappingsChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataProxmoxVirtualEnvironmentHardwareMappingsChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentHardwareMappingsChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mapping_id - computed: true, optional: false, required: false
  public get mappingId() {
    return this.getStringAttribute('mapping_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataProxmoxVirtualEnvironmentHardwareMappingsChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataProxmoxVirtualEnvironmentHardwareMappingsChecksOutputReference {
    return new DataProxmoxVirtualEnvironmentHardwareMappingsChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings proxmox_virtual_environment_hardware_mappings}
*/
export class DataProxmoxVirtualEnvironmentHardwareMappings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_hardware_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentHardwareMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentHardwareMappings to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentHardwareMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentHardwareMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_hardware_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.87.0/docs/data-sources/virtual_environment_hardware_mappings proxmox_virtual_environment_hardware_mappings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentHardwareMappingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentHardwareMappingsConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_hardware_mappings',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.87.0',
        providerVersionConstraint: '0.87.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkNode = config.checkNode;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_node - computed: false, optional: true, required: false
  private _checkNode?: string; 
  public get checkNode() {
    return this.getStringAttribute('check_node');
  }
  public set checkNode(value: string) {
    this._checkNode = value;
  }
  public resetCheckNode() {
    this._checkNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNodeInput() {
    return this._checkNode;
  }

  // checks - computed: true, optional: false, required: false
  private _checks = new DataProxmoxVirtualEnvironmentHardwareMappingsChecksList(this, "checks", false);
  public get checks() {
    return this._checks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_node: cdktf.stringToTerraform(this._checkNode),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_node: {
        value: cdktf.stringToHclTerraform(this._checkNode),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
