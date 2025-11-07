// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#description Org#description}
  */
  readonly description?: string;
  /**
  * Appears in the Cloud application as a human-readable name of the Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#display_name Org#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#id Org#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defines whether the Organization is a classic VRA-style tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#is_classic_tenant Org#is_classic_tenant}
  */
  readonly isClassicTenant?: boolean | cdktf.IResolvable;
  /**
  * Defines if the Organization enabled. Defaults to 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#is_enabled Org#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier in the full URL with which users log in to this Organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#name Org#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org vcfa_org}
*/
export class Org extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_org";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Org resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Org to import
  * @param importFromId The id of the existing Org that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Org to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_org", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org vcfa_org} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgConfig
  */
  public constructor(scope: Construct, id: string, config: OrgConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_org',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isClassicTenant = config.isClassicTenant;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_publish - computed: true, optional: false, required: false
  public get canPublish() {
    return this.getBooleanAttribute('can_publish');
  }

  // catalog_count - computed: true, optional: false, required: false
  public get catalogCount() {
    return this.getNumberAttribute('catalog_count');
  }

  // description - computed: false, optional: true, required: false
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

  // directly_managed_org_count - computed: true, optional: false, required: false
  public get directlyManagedOrgCount() {
    return this.getNumberAttribute('directly_managed_org_count');
  }

  // disk_count - computed: true, optional: false, required: false
  public get diskCount() {
    return this.getNumberAttribute('disk_count');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // is_classic_tenant - computed: false, optional: true, required: false
  private _isClassicTenant?: boolean | cdktf.IResolvable; 
  public get isClassicTenant() {
    return this.getBooleanAttribute('is_classic_tenant');
  }
  public set isClassicTenant(value: boolean | cdktf.IResolvable) {
    this._isClassicTenant = value;
  }
  public resetIsClassicTenant() {
    this._isClassicTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClassicTenantInput() {
    return this._isClassicTenant;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // managed_by_id - computed: true, optional: false, required: false
  public get managedById() {
    return this.getStringAttribute('managed_by_id');
  }

  // managed_by_name - computed: true, optional: false, required: false
  public get managedByName() {
    return this.getStringAttribute('managed_by_name');
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

  // org_region_quota_count - computed: true, optional: false, required: false
  public get orgRegionQuotaCount() {
    return this.getNumberAttribute('org_region_quota_count');
  }

  // running_vm_count - computed: true, optional: false, required: false
  public get runningVmCount() {
    return this.getNumberAttribute('running_vm_count');
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }

  // vapp_count - computed: true, optional: false, required: false
  public get vappCount() {
    return this.getNumberAttribute('vapp_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_classic_tenant: cdktf.booleanToTerraform(this._isClassicTenant),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      is_classic_tenant: {
        value: cdktf.booleanToHclTerraform(this._isClassicTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
