// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow broadcast address inclusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#broadcast ManagementNetwork#broadcast}
  */
  readonly broadcast?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#color ManagementNetwork#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#comments ManagementNetwork#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#id ManagementNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#ignore_errors ManagementNetwork#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#ignore_warnings ManagementNetwork#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#mask_length4 ManagementNetwork#mask_length4}
  */
  readonly maskLength4?: number;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#mask_length6 ManagementNetwork#mask_length6}
  */
  readonly maskLength6?: number;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#name ManagementNetwork#name}
  */
  readonly name: string;
  /**
  * NAT settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#nat_settings ManagementNetwork#nat_settings}
  */
  readonly natSettings?: { [key: string]: string };
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#subnet4 ManagementNetwork#subnet4}
  */
  readonly subnet4?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#subnet6 ManagementNetwork#subnet6}
  */
  readonly subnet6?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#tags ManagementNetwork#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network checkpoint_management_network}
*/
export class ManagementNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementNetwork to import
  * @param importFromId The id of the existing ManagementNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_network checkpoint_management_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_network',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._broadcast = config.broadcast;
    this._color = config.color;
    this._comments = config.comments;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._maskLength4 = config.maskLength4;
    this._maskLength6 = config.maskLength6;
    this._name = config.name;
    this._natSettings = config.natSettings;
    this._subnet4 = config.subnet4;
    this._subnet6 = config.subnet6;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: string; 
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }
  public set broadcast(value: string) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
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

  // mask_length4 - computed: false, optional: true, required: false
  private _maskLength4?: number; 
  public get maskLength4() {
    return this.getNumberAttribute('mask_length4');
  }
  public set maskLength4(value: number) {
    this._maskLength4 = value;
  }
  public resetMaskLength4() {
    this._maskLength4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength4Input() {
    return this._maskLength4;
  }

  // mask_length6 - computed: false, optional: true, required: false
  private _maskLength6?: number; 
  public get maskLength6() {
    return this.getNumberAttribute('mask_length6');
  }
  public set maskLength6(value: number) {
    this._maskLength6 = value;
  }
  public resetMaskLength6() {
    this._maskLength6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskLength6Input() {
    return this._maskLength6;
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

  // nat_settings - computed: false, optional: true, required: false
  private _natSettings?: { [key: string]: string }; 
  public get natSettings() {
    return this.getStringMapAttribute('nat_settings');
  }
  public set natSettings(value: { [key: string]: string }) {
    this._natSettings = value;
  }
  public resetNatSettings() {
    this._natSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natSettingsInput() {
    return this._natSettings;
  }

  // subnet4 - computed: false, optional: true, required: false
  private _subnet4?: string; 
  public get subnet4() {
    return this.getStringAttribute('subnet4');
  }
  public set subnet4(value: string) {
    this._subnet4 = value;
  }
  public resetSubnet4() {
    this._subnet4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet4Input() {
    return this._subnet4;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
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
      broadcast: cdktf.stringToTerraform(this._broadcast),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      mask_length4: cdktf.numberToTerraform(this._maskLength4),
      mask_length6: cdktf.numberToTerraform(this._maskLength6),
      name: cdktf.stringToTerraform(this._name),
      nat_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._natSettings),
      subnet4: cdktf.stringToTerraform(this._subnet4),
      subnet6: cdktf.stringToTerraform(this._subnet6),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast: {
        value: cdktf.stringToHclTerraform(this._broadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      mask_length4: {
        value: cdktf.numberToHclTerraform(this._maskLength4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask_length6: {
        value: cdktf.numberToHclTerraform(this._maskLength6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._natSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      subnet4: {
        value: cdktf.stringToHclTerraform(this._subnet4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet6: {
        value: cdktf.stringToHclTerraform(this._subnet6),
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
