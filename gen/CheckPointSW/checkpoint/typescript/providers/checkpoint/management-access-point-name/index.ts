// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAccessPointNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * APN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#apn ManagementAccessPointName#apn}
  */
  readonly apn?: string;
  /**
  * Block MS to MS traffic between this and other APN end user domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#block_traffic_other_end_user_domains ManagementAccessPointName#block_traffic_other_end_user_domains}
  */
  readonly blockTrafficOtherEndUserDomains?: boolean | cdktf.IResolvable;
  /**
  * Block MS to MS traffic within this end user domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#block_traffic_this_end_user_domain ManagementAccessPointName#block_traffic_this_end_user_domain}
  */
  readonly blockTrafficThisEndUserDomain?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#color ManagementAccessPointName#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#comments ManagementAccessPointName#comments}
  */
  readonly comments?: string;
  /**
  * End user domain name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#end_user_domain ManagementAccessPointName#end_user_domain}
  */
  readonly endUserDomain?: string;
  /**
  * Enable enforce end user domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#enforce_end_user_domain ManagementAccessPointName#enforce_end_user_domain}
  */
  readonly enforceEndUserDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#id ManagementAccessPointName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#ignore_errors ManagementAccessPointName#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#ignore_warnings ManagementAccessPointName#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#name ManagementAccessPointName#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#tags ManagementAccessPointName#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name checkpoint_management_access_point_name}
*/
export class ManagementAccessPointName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_access_point_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAccessPointName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAccessPointName to import
  * @param importFromId The id of the existing ManagementAccessPointName that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAccessPointName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_access_point_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_access_point_name checkpoint_management_access_point_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAccessPointNameConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAccessPointNameConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_access_point_name',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apn = config.apn;
    this._blockTrafficOtherEndUserDomains = config.blockTrafficOtherEndUserDomains;
    this._blockTrafficThisEndUserDomain = config.blockTrafficThisEndUserDomain;
    this._color = config.color;
    this._comments = config.comments;
    this._endUserDomain = config.endUserDomain;
    this._enforceEndUserDomain = config.enforceEndUserDomain;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // block_traffic_other_end_user_domains - computed: false, optional: true, required: false
  private _blockTrafficOtherEndUserDomains?: boolean | cdktf.IResolvable; 
  public get blockTrafficOtherEndUserDomains() {
    return this.getBooleanAttribute('block_traffic_other_end_user_domains');
  }
  public set blockTrafficOtherEndUserDomains(value: boolean | cdktf.IResolvable) {
    this._blockTrafficOtherEndUserDomains = value;
  }
  public resetBlockTrafficOtherEndUserDomains() {
    this._blockTrafficOtherEndUserDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTrafficOtherEndUserDomainsInput() {
    return this._blockTrafficOtherEndUserDomains;
  }

  // block_traffic_this_end_user_domain - computed: false, optional: true, required: false
  private _blockTrafficThisEndUserDomain?: boolean | cdktf.IResolvable; 
  public get blockTrafficThisEndUserDomain() {
    return this.getBooleanAttribute('block_traffic_this_end_user_domain');
  }
  public set blockTrafficThisEndUserDomain(value: boolean | cdktf.IResolvable) {
    this._blockTrafficThisEndUserDomain = value;
  }
  public resetBlockTrafficThisEndUserDomain() {
    this._blockTrafficThisEndUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTrafficThisEndUserDomainInput() {
    return this._blockTrafficThisEndUserDomain;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // end_user_domain - computed: false, optional: true, required: false
  private _endUserDomain?: string; 
  public get endUserDomain() {
    return this.getStringAttribute('end_user_domain');
  }
  public set endUserDomain(value: string) {
    this._endUserDomain = value;
  }
  public resetEndUserDomain() {
    this._endUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserDomainInput() {
    return this._endUserDomain;
  }

  // enforce_end_user_domain - computed: false, optional: true, required: false
  private _enforceEndUserDomain?: boolean | cdktf.IResolvable; 
  public get enforceEndUserDomain() {
    return this.getBooleanAttribute('enforce_end_user_domain');
  }
  public set enforceEndUserDomain(value: boolean | cdktf.IResolvable) {
    this._enforceEndUserDomain = value;
  }
  public resetEnforceEndUserDomain() {
    this._enforceEndUserDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceEndUserDomainInput() {
    return this._enforceEndUserDomain;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apn: cdktf.stringToTerraform(this._apn),
      block_traffic_other_end_user_domains: cdktf.booleanToTerraform(this._blockTrafficOtherEndUserDomains),
      block_traffic_this_end_user_domain: cdktf.booleanToTerraform(this._blockTrafficThisEndUserDomain),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      end_user_domain: cdktf.stringToTerraform(this._endUserDomain),
      enforce_end_user_domain: cdktf.booleanToTerraform(this._enforceEndUserDomain),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apn: {
        value: cdktf.stringToHclTerraform(this._apn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_traffic_other_end_user_domains: {
        value: cdktf.booleanToHclTerraform(this._blockTrafficOtherEndUserDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_traffic_this_end_user_domain: {
        value: cdktf.booleanToHclTerraform(this._blockTrafficThisEndUserDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_user_domain: {
        value: cdktf.stringToHclTerraform(this._endUserDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_end_user_domain: {
        value: cdktf.booleanToHclTerraform(this._enforceEndUserDomain),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
