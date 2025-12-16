// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoBindSecurityTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of domain names to bind to/unbind from a policy template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#entity TeoBindSecurityTemplate#entity}
  */
  readonly entity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#id TeoBindSecurityTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unbind operation option. valid values: `unbind-keep-policy`: unbind a domain name from the policy template while retaining the current policy. `unbind-use-default`: unbind a domain name from the policy template and use the default blank policy. default value: `unbind-keep-policy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#operate TeoBindSecurityTemplate#operate}
  */
  readonly operate?: string;
  /**
  * If the passed-in domain is already bound to a policy template (including site-level protection policies), setting this parameter indicates whether to replace that template. The default value is true. Supported values are: `true`: Replace the currently bound template for the domain. `false`: Do not replace the currently bound template for the domain. Note: When set to false, if the passed-in domain is already bound to a policy template, the API will return an error; site-level protection policies are also a type of policy template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#over_write TeoBindSecurityTemplate#over_write}
  */
  readonly overWrite?: boolean | cdktf.IResolvable;
  /**
  * Specifies the ID of the policy template or the site global policy to be bound or unbound.
  * <li>To bind to a policy template, or unbind from it, specify the policy template ID.</li>.
  * <li>To bind to the site's global policy, or unbind from it, use the @ZoneLevel@domain parameter value.</li>.
  * 
  * Note: After unbinding, the domain name will use an independent policy and rule quota will be calculated separately. Please make sure there is sufficient rule quota before unbinding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#template_id TeoBindSecurityTemplate#template_id}
  */
  readonly templateId: string;
  /**
  * Site ID of the policy template to be bound to or unbound from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#zone_id TeoBindSecurityTemplate#zone_id}
  */
  readonly zoneId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template tencentcloud_teo_bind_security_template}
*/
export class TeoBindSecurityTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_bind_security_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoBindSecurityTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoBindSecurityTemplate to import
  * @param importFromId The id of the existing TeoBindSecurityTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoBindSecurityTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_bind_security_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_bind_security_template tencentcloud_teo_bind_security_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoBindSecurityTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TeoBindSecurityTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_bind_security_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entity = config.entity;
    this._id = config.id;
    this._operate = config.operate;
    this._overWrite = config.overWrite;
    this._templateId = config.templateId;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity - computed: false, optional: false, required: true
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
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

  // operate - computed: true, optional: true, required: false
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  public resetOperate() {
    this._operate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // over_write - computed: true, optional: true, required: false
  private _overWrite?: boolean | cdktf.IResolvable; 
  public get overWrite() {
    return this.getBooleanAttribute('over_write');
  }
  public set overWrite(value: boolean | cdktf.IResolvable) {
    this._overWrite = value;
  }
  public resetOverWrite() {
    this._overWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overWriteInput() {
    return this._overWrite;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity: cdktf.stringToTerraform(this._entity),
      id: cdktf.stringToTerraform(this._id),
      operate: cdktf.stringToTerraform(this._operate),
      over_write: cdktf.booleanToTerraform(this._overWrite),
      template_id: cdktf.stringToTerraform(this._templateId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity: {
        value: cdktf.stringToHclTerraform(this._entity),
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
      operate: {
        value: cdktf.stringToHclTerraform(this._operate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      over_write: {
        value: cdktf.booleanToHclTerraform(this._overWrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
