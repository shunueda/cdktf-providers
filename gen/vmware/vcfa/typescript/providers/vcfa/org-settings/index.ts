// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the Organization can create content libraries that are subscribed to external sources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings#can_create_subscribed_libraries OrgSettings#can_create_subscribed_libraries}
  */
  readonly canCreateSubscribedLibraries: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings#id OrgSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent Organization for Organization Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings#org_id OrgSettings#org_id}
  */
  readonly orgId: string;
  /**
  * Whether to quarantine new Content Library Items for file inspection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings#quarantine_content_library_items OrgSettings#quarantine_content_library_items}
  */
  readonly quarantineContentLibraryItems: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings vcfa_org_settings}
*/
export class OrgSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_org_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgSettings to import
  * @param importFromId The id of the existing OrgSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_org_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_settings vcfa_org_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrgSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_org_settings',
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
    this._canCreateSubscribedLibraries = config.canCreateSubscribedLibraries;
    this._id = config.id;
    this._orgId = config.orgId;
    this._quarantineContentLibraryItems = config.quarantineContentLibraryItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_create_subscribed_libraries - computed: false, optional: false, required: true
  private _canCreateSubscribedLibraries?: boolean | cdktf.IResolvable; 
  public get canCreateSubscribedLibraries() {
    return this.getBooleanAttribute('can_create_subscribed_libraries');
  }
  public set canCreateSubscribedLibraries(value: boolean | cdktf.IResolvable) {
    this._canCreateSubscribedLibraries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateSubscribedLibrariesInput() {
    return this._canCreateSubscribedLibraries;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // quarantine_content_library_items - computed: false, optional: false, required: true
  private _quarantineContentLibraryItems?: boolean | cdktf.IResolvable; 
  public get quarantineContentLibraryItems() {
    return this.getBooleanAttribute('quarantine_content_library_items');
  }
  public set quarantineContentLibraryItems(value: boolean | cdktf.IResolvable) {
    this._quarantineContentLibraryItems = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineContentLibraryItemsInput() {
    return this._quarantineContentLibraryItems;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_create_subscribed_libraries: cdktf.booleanToTerraform(this._canCreateSubscribedLibraries),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      quarantine_content_library_items: cdktf.booleanToTerraform(this._quarantineContentLibraryItems),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      can_create_subscribed_libraries: {
        value: cdktf.booleanToHclTerraform(this._canCreateSubscribedLibraries),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_content_library_items: {
        value: cdktf.booleanToHclTerraform(this._quarantineContentLibraryItems),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
