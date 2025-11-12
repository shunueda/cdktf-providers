// https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssertProviderConfig {
  /**
  * If true, any assertion failed will through an error in the provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#fail_on_assert AssertProvider#fail_on_assert}
  */
  readonly failOnAssert?: boolean | cdktf.IResolvable;
  /**
  * Template to build the body of the message for SNS notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#sns_body_template AssertProvider#sns_body_template}
  */
  readonly snsBodyTemplate?: string;
  /**
  * Template to build the subject of the message for SNS notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#sns_subject_template AssertProvider#sns_subject_template}
  */
  readonly snsSubjectTemplate?: string;
  /**
  * SNS topic ARN to be notified in case of error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#sns_topic_arn AssertProvider#sns_topic_arn}
  */
  readonly snsTopicArn?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#alias AssertProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs assert}
*/
export class AssertProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "assert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssertProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssertProvider to import
  * @param importFromId The id of the existing AssertProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssertProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "assert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpaquet/assert/0.9.2/docs assert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssertProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AssertProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'assert',
      terraformGeneratorMetadata: {
        providerName: 'assert',
        providerVersion: '0.9.2',
        providerVersionConstraint: '0.9.2'
      },
      terraformProviderSource: 'bpaquet/assert'
    });
    this._failOnAssert = config.failOnAssert;
    this._snsBodyTemplate = config.snsBodyTemplate;
    this._snsSubjectTemplate = config.snsSubjectTemplate;
    this._snsTopicArn = config.snsTopicArn;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fail_on_assert - computed: false, optional: true, required: false
  private _failOnAssert?: boolean | cdktf.IResolvable; 
  public get failOnAssert() {
    return this._failOnAssert;
  }
  public set failOnAssert(value: boolean | cdktf.IResolvable | undefined) {
    this._failOnAssert = value;
  }
  public resetFailOnAssert() {
    this._failOnAssert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnAssertInput() {
    return this._failOnAssert;
  }

  // sns_body_template - computed: false, optional: true, required: false
  private _snsBodyTemplate?: string; 
  public get snsBodyTemplate() {
    return this._snsBodyTemplate;
  }
  public set snsBodyTemplate(value: string | undefined) {
    this._snsBodyTemplate = value;
  }
  public resetSnsBodyTemplate() {
    this._snsBodyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsBodyTemplateInput() {
    return this._snsBodyTemplate;
  }

  // sns_subject_template - computed: false, optional: true, required: false
  private _snsSubjectTemplate?: string; 
  public get snsSubjectTemplate() {
    return this._snsSubjectTemplate;
  }
  public set snsSubjectTemplate(value: string | undefined) {
    this._snsSubjectTemplate = value;
  }
  public resetSnsSubjectTemplate() {
    this._snsSubjectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsSubjectTemplateInput() {
    return this._snsSubjectTemplate;
  }

  // sns_topic_arn - computed: false, optional: true, required: false
  private _snsTopicArn?: string; 
  public get snsTopicArn() {
    return this._snsTopicArn;
  }
  public set snsTopicArn(value: string | undefined) {
    this._snsTopicArn = value;
  }
  public resetSnsTopicArn() {
    this._snsTopicArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicArnInput() {
    return this._snsTopicArn;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fail_on_assert: cdktf.booleanToTerraform(this._failOnAssert),
      sns_body_template: cdktf.stringToTerraform(this._snsBodyTemplate),
      sns_subject_template: cdktf.stringToTerraform(this._snsSubjectTemplate),
      sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fail_on_assert: {
        value: cdktf.booleanToHclTerraform(this._failOnAssert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sns_body_template: {
        value: cdktf.stringToHclTerraform(this._snsBodyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_subject_template: {
        value: cdktf.stringToHclTerraform(this._snsSubjectTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sns_topic_arn: {
        value: cdktf.stringToHclTerraform(this._snsTopicArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
