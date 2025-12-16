// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyProjectIpAddressAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation IPs - single IP or cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#allocation_ips DataNsxtPolicyProjectIpAddressAllocation#allocation_ips}
  */
  readonly allocationIps: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#description DataNsxtPolicyProjectIpAddressAllocation#description}
  */
  readonly description?: string;
  /**
  * Display name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#display_name DataNsxtPolicyProjectIpAddressAllocation#display_name}
  */
  readonly displayName?: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#id DataNsxtPolicyProjectIpAddressAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#context DataNsxtPolicyProjectIpAddressAllocation#context}
  */
  readonly context: DataNsxtPolicyProjectIpAddressAllocationContext;
}
export interface DataNsxtPolicyProjectIpAddressAllocationContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#project_id DataNsxtPolicyProjectIpAddressAllocation#project_id}
  */
  readonly projectId: string;
}

export function dataNsxtPolicyProjectIpAddressAllocationContextToTerraform(struct?: DataNsxtPolicyProjectIpAddressAllocationContextOutputReference | DataNsxtPolicyProjectIpAddressAllocationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataNsxtPolicyProjectIpAddressAllocationContextToHclTerraform(struct?: DataNsxtPolicyProjectIpAddressAllocationContextOutputReference | DataNsxtPolicyProjectIpAddressAllocationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNsxtPolicyProjectIpAddressAllocationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNsxtPolicyProjectIpAddressAllocationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNsxtPolicyProjectIpAddressAllocationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation nsxt_policy_project_ip_address_allocation}
*/
export class DataNsxtPolicyProjectIpAddressAllocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_project_ip_address_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyProjectIpAddressAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyProjectIpAddressAllocation to import
  * @param importFromId The id of the existing DataNsxtPolicyProjectIpAddressAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyProjectIpAddressAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_project_ip_address_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/data-sources/policy_project_ip_address_allocation nsxt_policy_project_ip_address_allocation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyProjectIpAddressAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyProjectIpAddressAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_project_ip_address_allocation',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationIps = config.allocationIps;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._context.internalValue = config.context;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_ips - computed: false, optional: false, required: true
  private _allocationIps?: string; 
  public get allocationIps() {
    return this.getStringAttribute('allocation_ips');
  }
  public set allocationIps(value: string) {
    this._allocationIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationIpsInput() {
    return this._allocationIps;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // context - computed: false, optional: false, required: true
  private _context = new DataNsxtPolicyProjectIpAddressAllocationContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: DataNsxtPolicyProjectIpAddressAllocationContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_ips: cdktf.stringToTerraform(this._allocationIps),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      context: dataNsxtPolicyProjectIpAddressAllocationContextToTerraform(this._context.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_ips: {
        value: cdktf.stringToHclTerraform(this._allocationIps),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      context: {
        value: dataNsxtPolicyProjectIpAddressAllocationContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNsxtPolicyProjectIpAddressAllocationContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
