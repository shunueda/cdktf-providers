// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#alert_condition_id AlertCondition#alert_condition_id}
  */
  readonly alertConditionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#id AlertCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#in_grace AlertCondition#in_grace}
  */
  readonly inGrace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#parameters AlertCondition#parameters}
  */
  readonly parameters: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#stream_id AlertCondition#stream_id}
  */
  readonly streamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#title AlertCondition#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#type AlertCondition#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition graylog_alert_condition}
*/
export class AlertCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_alert_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertCondition to import
  * @param importFromId The id of the existing AlertCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_alert_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/alert_condition graylog_alert_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AlertConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_alert_condition',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertConditionId = config.alertConditionId;
    this._id = config.id;
    this._inGrace = config.inGrace;
    this._parameters = config.parameters;
    this._streamId = config.streamId;
    this._title = config.title;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_condition_id - computed: true, optional: true, required: false
  private _alertConditionId?: string; 
  public get alertConditionId() {
    return this.getStringAttribute('alert_condition_id');
  }
  public set alertConditionId(value: string) {
    this._alertConditionId = value;
  }
  public resetAlertConditionId() {
    this._alertConditionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionIdInput() {
    return this._alertConditionId;
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

  // in_grace - computed: false, optional: true, required: false
  private _inGrace?: boolean | cdktf.IResolvable; 
  public get inGrace() {
    return this.getBooleanAttribute('in_grace');
  }
  public set inGrace(value: boolean | cdktf.IResolvable) {
    this._inGrace = value;
  }
  public resetInGrace() {
    this._inGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inGraceInput() {
    return this._inGrace;
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_condition_id: cdktf.stringToTerraform(this._alertConditionId),
      id: cdktf.stringToTerraform(this._id),
      in_grace: cdktf.booleanToTerraform(this._inGrace),
      parameters: cdktf.stringToTerraform(this._parameters),
      stream_id: cdktf.stringToTerraform(this._streamId),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_condition_id: {
        value: cdktf.stringToHclTerraform(this._alertConditionId),
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
      in_grace: {
        value: cdktf.booleanToHclTerraform(this._inGrace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
