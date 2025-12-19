// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDblbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify user/password string class list (Class list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#class_list SlbTemplateDblb#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#id SlbTemplateDblb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DBLB template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#name SlbTemplateDblb#name}
  */
  readonly name: string;
  /**
  * 'MSSQL2008': MSSQL server 2008 or 2008 R2; 'MSSQL2012': MSSQL server 2012; 'MySQL': MySQL server (any version);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#server_version SlbTemplateDblb#server_version}
  */
  readonly serverVersion?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#user_tag SlbTemplateDblb#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#uuid SlbTemplateDblb#uuid}
  */
  readonly uuid?: string;
  /**
  * calc_sha1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#calc_sha1 SlbTemplateDblb#calc_sha1}
  */
  readonly calcSha1?: SlbTemplateDblbCalcSha1;
}
export interface SlbTemplateDblbCalcSha1 {
  /**
  * Cleartext password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#sha1_value SlbTemplateDblb#sha1_value}
  */
  readonly sha1Value?: string;
}

export function slbTemplateDblbCalcSha1ToTerraform(struct?: SlbTemplateDblbCalcSha1OutputReference | SlbTemplateDblbCalcSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha1_value: cdktf.stringToTerraform(struct!.sha1Value),
  }
}


export function slbTemplateDblbCalcSha1ToHclTerraform(struct?: SlbTemplateDblbCalcSha1OutputReference | SlbTemplateDblbCalcSha1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha1_value: {
      value: cdktf.stringToHclTerraform(struct!.sha1Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDblbCalcSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDblbCalcSha1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha1Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1Value = this._sha1Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDblbCalcSha1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha1Value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha1Value = value.sha1Value;
    }
  }

  // sha1_value - computed: false, optional: true, required: false
  private _sha1Value?: string; 
  public get sha1Value() {
    return this.getStringAttribute('sha1_value');
  }
  public set sha1Value(value: string) {
    this._sha1Value = value;
  }
  public resetSha1Value() {
    this._sha1Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1ValueInput() {
    return this._sha1Value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb thunder_slb_template_dblb}
*/
export class SlbTemplateDblb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_dblb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDblb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDblb to import
  * @param importFromId The id of the existing SlbTemplateDblb that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDblb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_dblb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_template_dblb thunder_slb_template_dblb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDblbConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDblbConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_dblb',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classList = config.classList;
    this._id = config.id;
    this._name = config.name;
    this._serverVersion = config.serverVersion;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._calcSha1.internalValue = config.calcSha1;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
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

  // server_version - computed: false, optional: true, required: false
  private _serverVersion?: string; 
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }
  public set serverVersion(value: string) {
    this._serverVersion = value;
  }
  public resetServerVersion() {
    this._serverVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVersionInput() {
    return this._serverVersion;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // calc_sha1 - computed: false, optional: true, required: false
  private _calcSha1 = new SlbTemplateDblbCalcSha1OutputReference(this, "calc_sha1");
  public get calcSha1() {
    return this._calcSha1;
  }
  public putCalcSha1(value: SlbTemplateDblbCalcSha1) {
    this._calcSha1.internalValue = value;
  }
  public resetCalcSha1() {
    this._calcSha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calcSha1Input() {
    return this._calcSha1.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_list: cdktf.stringToTerraform(this._classList),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      server_version: cdktf.stringToTerraform(this._serverVersion),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      calc_sha1: slbTemplateDblbCalcSha1ToTerraform(this._calcSha1.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_list: {
        value: cdktf.stringToHclTerraform(this._classList),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_version: {
        value: cdktf.stringToHclTerraform(this._serverVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      calc_sha1: {
        value: slbTemplateDblbCalcSha1ToHclTerraform(this._calcSha1.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDblbCalcSha1List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
