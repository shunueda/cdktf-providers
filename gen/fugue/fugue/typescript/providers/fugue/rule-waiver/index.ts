// https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleWaiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * A comment describing the purpose of the waiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#comment RuleWaiver#comment}
  */
  readonly comment: string;
  /**
  * The environment containing the resource to be waived.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#environment_id RuleWaiver#environment_id}
  */
  readonly environmentId: string;
  /**
  * The name of the waiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#name RuleWaiver#name}
  */
  readonly name: string;
  /**
  * The ID string of the resource, such as `my-s3-bucket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#resource_id RuleWaiver#resource_id}
  */
  readonly resourceId: string;
  /**
  * A provider string like `aws.us-east-2` or `azure` describing the location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#resource_provider RuleWaiver#resource_provider}
  */
  readonly resourceProvider: string;
  /**
  * A resource tag to match on, such as `Team:Engineering`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#resource_tag RuleWaiver#resource_tag}
  */
  readonly resourceTag?: string;
  /**
  * The type string of the resource, such as `AWS.S3.Bucket`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#resource_type RuleWaiver#resource_type}
  */
  readonly resourceType: string;
  /**
  * The ID of the rule to be waived, such as `FG_R00229`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#rule_id RuleWaiver#rule_id}
  */
  readonly ruleId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver fugue_rule_waiver}
*/
export class RuleWaiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fugue_rule_waiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuleWaiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuleWaiver to import
  * @param importFromId The id of the existing RuleWaiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuleWaiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fugue_rule_waiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fugue/fugue/0.0.11/docs/resources/rule_waiver fugue_rule_waiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleWaiverConfig
  */
  public constructor(scope: Construct, id: string, config: RuleWaiverConfig) {
    super(scope, id, {
      terraformResourceType: 'fugue_rule_waiver',
      terraformGeneratorMetadata: {
        providerName: 'fugue',
        providerVersion: '0.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._environmentId = config.environmentId;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._resourceProvider = config.resourceProvider;
    this._resourceTag = config.resourceTag;
    this._resourceType = config.resourceType;
    this._ruleId = config.ruleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_provider - computed: false, optional: false, required: true
  private _resourceProvider?: string; 
  public get resourceProvider() {
    return this.getStringAttribute('resource_provider');
  }
  public set resourceProvider(value: string) {
    this._resourceProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceProviderInput() {
    return this._resourceProvider;
  }

  // resource_tag - computed: false, optional: true, required: false
  private _resourceTag?: string; 
  public get resourceTag() {
    return this.getStringAttribute('resource_tag');
  }
  public set resourceTag(value: string) {
    this._resourceTag = value;
  }
  public resetResourceTag() {
    this._resourceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagInput() {
    return this._resourceTag;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_provider: cdktf.stringToTerraform(this._resourceProvider),
      resource_tag: cdktf.stringToTerraform(this._resourceTag),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      rule_id: cdktf.stringToTerraform(this._ruleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_provider: {
        value: cdktf.stringToHclTerraform(this._resourceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tag: {
        value: cdktf.stringToHclTerraform(this._resourceTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
