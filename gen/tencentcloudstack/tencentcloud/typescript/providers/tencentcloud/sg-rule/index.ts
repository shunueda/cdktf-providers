// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SgRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule status. `0` is off, `1` is on. This parameter is not required or is 1 when creating.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#enable SgRule#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#id SgRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#data SgRule#data}
  */
  readonly data: SgRuleData;
}
export interface SgRuleData {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#description SgRule#description}
  */
  readonly description: string;
  /**
  * Destination example: `net`: IP/CIDR (192.168.0.2); `template`: parameter template (ipm-dyodhpby); `instance`: asset instance (ins-123456); `resourcegroup`: asset group (/all groups/group 1/subgroup 1); `tag`: resource tag ({"Key":"tag key","Value":"tag value"}); `region`: region (ap-gaungzhou).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#dest_content SgRule#dest_content}
  */
  readonly destContent: string;
  /**
  * Access destination type. Valid values: net|template|instance|resourcegroup|tag|region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#dest_type SgRule#dest_type}
  */
  readonly destType: string;
  /**
  * The port to apply access control rules. Valid values: `-1/-1`: all ports, `80`: port 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#port SgRule#port}
  */
  readonly port?: string;
  /**
  * Protocol. TCP/UDP/ICMP/ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#protocol SgRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The action that Cloud Firewall performs on the traffic. Valid values: `accept`: allow, `drop`: deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#rule_action SgRule#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Parameter template ID of port and protocol type; mutually exclusive with Protocol and Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#service_template_id SgRule#service_template_id}
  */
  readonly serviceTemplateId?: string;
  /**
  * Source example: `net`: IP/CIDR (192.168.0.2); `template`: parameter template (ipm-dyodhpby); `instance`: asset instance (ins-123456); `resourcegroup`: asset group (/all groups/group 1/subgroup 1); `tag`: resource tag ({"Key":"tag key","Value":"tag value"}); `region`: region (ap-gaungzhou).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#source_content SgRule#source_content}
  */
  readonly sourceContent: string;
  /**
  * Access source type. Valid values: net|template|instance|resourcegroup|tag|region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#source_type SgRule#source_type}
  */
  readonly sourceType: string;
}

export function sgRuleDataToTerraform(struct?: SgRuleDataOutputReference | SgRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dest_content: cdktf.stringToTerraform(struct!.destContent),
    dest_type: cdktf.stringToTerraform(struct!.destType),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rule_action: cdktf.stringToTerraform(struct!.ruleAction),
    service_template_id: cdktf.stringToTerraform(struct!.serviceTemplateId),
    source_content: cdktf.stringToTerraform(struct!.sourceContent),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function sgRuleDataToHclTerraform(struct?: SgRuleDataOutputReference | SgRuleData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_content: {
      value: cdktf.stringToHclTerraform(struct!.destContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_type: {
      value: cdktf.stringToHclTerraform(struct!.destType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_action: {
      value: cdktf.stringToHclTerraform(struct!.ruleAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_template_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_content: {
      value: cdktf.stringToHclTerraform(struct!.sourceContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SgRuleDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SgRuleData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.destContent = this._destContent;
    }
    if (this._destType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destType = this._destType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._ruleAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleAction = this._ruleAction;
    }
    if (this._serviceTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplateId = this._serviceTemplateId;
    }
    if (this._sourceContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceContent = this._sourceContent;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SgRuleData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._destContent = undefined;
      this._destType = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._ruleAction = undefined;
      this._serviceTemplateId = undefined;
      this._sourceContent = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._destContent = value.destContent;
      this._destType = value.destType;
      this._port = value.port;
      this._protocol = value.protocol;
      this._ruleAction = value.ruleAction;
      this._serviceTemplateId = value.serviceTemplateId;
      this._sourceContent = value.sourceContent;
      this._sourceType = value.sourceType;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_content - computed: false, optional: false, required: true
  private _destContent?: string; 
  public get destContent() {
    return this.getStringAttribute('dest_content');
  }
  public set destContent(value: string) {
    this._destContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destContentInput() {
    return this._destContent;
  }

  // dest_type - computed: false, optional: false, required: true
  private _destType?: string; 
  public get destType() {
    return this.getStringAttribute('dest_type');
  }
  public set destType(value: string) {
    this._destType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destTypeInput() {
    return this._destType;
  }

  // order_index - computed: true, optional: false, required: false
  public get orderIndex() {
    return this.getStringAttribute('order_index');
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_action - computed: false, optional: false, required: true
  private _ruleAction?: string; 
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }
  public set ruleAction(value: string) {
    this._ruleAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionInput() {
    return this._ruleAction;
  }

  // service_template_id - computed: false, optional: true, required: false
  private _serviceTemplateId?: string; 
  public get serviceTemplateId() {
    return this.getStringAttribute('service_template_id');
  }
  public set serviceTemplateId(value: string) {
    this._serviceTemplateId = value;
  }
  public resetServiceTemplateId() {
    this._serviceTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateIdInput() {
    return this._serviceTemplateId;
  }

  // source_content - computed: false, optional: false, required: true
  private _sourceContent?: string; 
  public get sourceContent() {
    return this.getStringAttribute('source_content');
  }
  public set sourceContent(value: string) {
    this._sourceContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceContentInput() {
    return this._sourceContent;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule tencentcloud_sg_rule}
*/
export class SgRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sg_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SgRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SgRule to import
  * @param importFromId The id of the existing SgRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SgRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sg_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sg_rule tencentcloud_sg_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SgRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SgRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sg_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._data.internalValue = config.data;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: true, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // data - computed: false, optional: false, required: true
  private _data = new SgRuleDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: SgRuleData) {
    this._data.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      data: sgRuleDataToTerraform(this._data.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: sgRuleDataToHclTerraform(this._data.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SgRuleDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
