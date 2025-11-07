// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BusinessEventsCapturingVariantsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Possible Values: `CONTAINS`, `ENDS_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#content_type_matcher BusinessEventsCapturingVariants#content_type_matcher}
  */
  readonly contentTypeMatcher: string;
  /**
  * Content-type match value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#content_type_value BusinessEventsCapturingVariants#content_type_value}
  */
  readonly contentTypeValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#id BusinessEventsCapturingVariants#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#insert_after BusinessEventsCapturingVariants#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * Possible Values: `JSON`, `Raw`, `Text`, `URLencoded`, `XML`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#parser BusinessEventsCapturingVariants#parser}
  */
  readonly parser: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#scope BusinessEventsCapturingVariants#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants dynatrace_business_events_capturing_variants}
*/
export class BusinessEventsCapturingVariants extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_business_events_capturing_variants";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BusinessEventsCapturingVariants resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BusinessEventsCapturingVariants to import
  * @param importFromId The id of the existing BusinessEventsCapturingVariants that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BusinessEventsCapturingVariants to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_business_events_capturing_variants", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/business_events_capturing_variants dynatrace_business_events_capturing_variants} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BusinessEventsCapturingVariantsConfig
  */
  public constructor(scope: Construct, id: string, config: BusinessEventsCapturingVariantsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_business_events_capturing_variants',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contentTypeMatcher = config.contentTypeMatcher;
    this._contentTypeValue = config.contentTypeValue;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._parser = config.parser;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_type_matcher - computed: false, optional: false, required: true
  private _contentTypeMatcher?: string; 
  public get contentTypeMatcher() {
    return this.getStringAttribute('content_type_matcher');
  }
  public set contentTypeMatcher(value: string) {
    this._contentTypeMatcher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeMatcherInput() {
    return this._contentTypeMatcher;
  }

  // content_type_value - computed: false, optional: false, required: true
  private _contentTypeValue?: string; 
  public get contentTypeValue() {
    return this.getStringAttribute('content_type_value');
  }
  public set contentTypeValue(value: string) {
    this._contentTypeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeValueInput() {
    return this._contentTypeValue;
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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // parser - computed: false, optional: false, required: true
  private _parser?: string; 
  public get parser() {
    return this.getStringAttribute('parser');
  }
  public set parser(value: string) {
    this._parser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type_matcher: cdktf.stringToTerraform(this._contentTypeMatcher),
      content_type_value: cdktf.stringToTerraform(this._contentTypeValue),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      parser: cdktf.stringToTerraform(this._parser),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_type_matcher: {
        value: cdktf.stringToHclTerraform(this._contentTypeMatcher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type_value: {
        value: cdktf.stringToHclTerraform(this._contentTypeValue),
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parser: {
        value: cdktf.stringToHclTerraform(this._parser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
