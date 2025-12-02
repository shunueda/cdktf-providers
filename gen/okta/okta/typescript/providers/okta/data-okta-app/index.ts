// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search only ACTIVE applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#active_only DataOktaApp#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Id of application to retrieve, conflicts with label and label_prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#id DataOktaApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The label of the app to retrieve, conflicts with
  * 				label_prefix and id. Label uses the ?q=<label> query parameter exposed by
  * 				Okta's List Apps API. The API will search both name and label using that
  * 				query. Therefore similarly named and labeled apps may be returned in the query
  * 				and have the unintended result of associating the wrong app with this data
  * 				source. See:
  * 				https://developer.okta.com/docs/reference/api/apps/#list-applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#label DataOktaApp#label}
  */
  readonly label?: string;
  /**
  * Label prefix of the app to retrieve, conflicts with label and id. This will tell the
  * 				provider to do a starts with query as opposed to an equals query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#label_prefix DataOktaApp#label_prefix}
  */
  readonly labelPrefix?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#skip_groups DataOktaApp#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#skip_users DataOktaApp#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app okta_app}
*/
export class DataOktaApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaApp to import
  * @param importFromId The id of the existing DataOktaApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/app okta_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_app',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeOnly = config.activeOnly;
    this._id = config.id;
    this._label = config.label;
    this._labelPrefix = config.labelPrefix;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only');
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label_prefix - computed: false, optional: true, required: false
  private _labelPrefix?: string; 
  public get labelPrefix() {
    return this.getStringAttribute('label_prefix');
  }
  public set labelPrefix(value: string) {
    this._labelPrefix = value;
  }
  public resetLabelPrefix() {
    this._labelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPrefixInput() {
    return this._labelPrefix;
  }

  // links - computed: true, optional: false, required: false
  public get links() {
    return this.getStringAttribute('links');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups');
  }
  public set skipGroups(value: boolean | cdktf.IResolvable) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users');
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      id: cdktf.stringToTerraform(this._id),
      label: cdktf.stringToTerraform(this._label),
      label_prefix: cdktf.stringToTerraform(this._labelPrefix),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_only: {
        value: cdktf.booleanToHclTerraform(this._activeOnly),
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
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_prefix: {
        value: cdktf.stringToHclTerraform(this._labelPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_groups: {
        value: cdktf.booleanToHclTerraform(this._skipGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_users: {
        value: cdktf.booleanToHclTerraform(this._skipUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
