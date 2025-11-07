// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomComplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Free-form text description of the custom Compliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance#name CustomCompliance#name}
  */
  readonly name: string;
  /**
  * Script of this custom compliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance#script CustomCompliance#script}
  */
  readonly script: string;
  /**
  * Severity of this custom compliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance#severity CustomCompliance#severity}
  */
  readonly severity: string;
  /**
  * Description of the custom compliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance#title CustomCompliance#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance prismacloudcompute_custom_compliance}
*/
export class CustomCompliance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_custom_compliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomCompliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomCompliance to import
  * @param importFromId The id of the existing CustomCompliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomCompliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_custom_compliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_compliance prismacloudcompute_custom_compliance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomComplianceConfig
  */
  public constructor(scope: Construct, id: string, config: CustomComplianceConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_custom_compliance',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._script = config.script;
    this._severity = config.severity;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // prisma_id - computed: true, optional: false, required: false
  public get prismaId() {
    return this.getNumberAttribute('prisma_id');
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      script: cdktf.stringToTerraform(this._script),
      severity: cdktf.stringToTerraform(this._severity),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
