// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwEdgePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#description CfwEdgePolicy#description}
  */
  readonly description?: string;
  /**
  * Rule direction: 1, inbound; 0, outbound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#direction CfwEdgePolicy#direction}
  */
  readonly direction: number;
  /**
  * Rule status, true means enabled, false means disabled. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#enable CfwEdgePolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#id CfwEdgePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parameter template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#param_template_id CfwEdgePolicy#param_template_id}
  */
  readonly paramTemplateId?: string;
  /**
  * The port for the access control policy. Value: -1/-1: All ports 80: Port 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#port CfwEdgePolicy#port}
  */
  readonly port: string;
  /**
  * Protocol. If Direction=1 && Scope=serial, optional values: TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS; If Direction=1 && Scope!=serial, optional values: TCP; If Direction=0 && Scope=serial, optional values: TCP UDP ICMP ANY HTTP HTTPS HTTP/HTTPS SMTP SMTPS SMTP/SMTPS FTP DNS; If Direction=0 && Scope!=serial, optional values: TCP HTTP/HTTPS TLS/SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#protocol CfwEdgePolicy#protocol}
  */
  readonly protocol: string;
  /**
  * How the traffic set in the access control policy passes through the cloud firewall. Values: accept: allow; drop: reject; log: observe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#rule_action CfwEdgePolicy#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Effective range. serial: serial; side: bypass; all: global, Default is all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#scope CfwEdgePolicy#scope}
  */
  readonly scope?: string;
  /**
  * Access source example: net:IP/CIDR(192.168.0.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#source_content CfwEdgePolicy#source_content}
  */
  readonly sourceContent: string;
  /**
  * Access source type: for inbound rules, the type can be net, location, vendor, template; for outbound rules, it can be net, instance, tag, template, group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#source_type CfwEdgePolicy#source_type}
  */
  readonly sourceType: string;
  /**
  * Example of access purpose: net: IP/CIDR(192.168.0.2) domain: domain name rules, such as *.qq.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#target_content CfwEdgePolicy#target_content}
  */
  readonly targetContent: string;
  /**
  * Access purpose type: For inbound rules, the type can be net, instance, tag, template, group; for outbound rules, it can be net, location, vendor, template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#target_type CfwEdgePolicy#target_type}
  */
  readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy tencentcloud_cfw_edge_policy}
*/
export class CfwEdgePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_edge_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwEdgePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwEdgePolicy to import
  * @param importFromId The id of the existing CfwEdgePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwEdgePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_edge_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cfw_edge_policy tencentcloud_cfw_edge_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwEdgePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CfwEdgePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_edge_policy',
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
    this._description = config.description;
    this._direction = config.direction;
    this._enable = config.enable;
    this._id = config.id;
    this._paramTemplateId = config.paramTemplateId;
    this._port = config.port;
    this._protocol = config.protocol;
    this._ruleAction = config.ruleAction;
    this._scope = config.scope;
    this._sourceContent = config.sourceContent;
    this._sourceType = config.sourceType;
    this._targetContent = config.targetContent;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: number; 
  public get direction() {
    return this.getNumberAttribute('direction');
  }
  public set direction(value: number) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
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

  // param_template_id - computed: true, optional: true, required: false
  private _paramTemplateId?: string; 
  public get paramTemplateId() {
    return this.getStringAttribute('param_template_id');
  }
  public set paramTemplateId(value: string) {
    this._paramTemplateId = value;
  }
  public resetParamTemplateId() {
    this._paramTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramTemplateIdInput() {
    return this._paramTemplateId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
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

  // scope - computed: true, optional: true, required: false
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

  // target_content - computed: false, optional: false, required: true
  private _targetContent?: string; 
  public get targetContent() {
    return this.getStringAttribute('target_content');
  }
  public set targetContent(value: string) {
    this._targetContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContentInput() {
    return this._targetContent;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getNumberAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.numberToTerraform(this._direction),
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      param_template_id: cdktf.stringToTerraform(this._paramTemplateId),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      scope: cdktf.stringToTerraform(this._scope),
      source_content: cdktf.stringToTerraform(this._sourceContent),
      source_type: cdktf.stringToTerraform(this._sourceType),
      target_content: cdktf.stringToTerraform(this._targetContent),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.numberToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      param_template_id: {
        value: cdktf.stringToHclTerraform(this._paramTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_action: {
        value: cdktf.stringToHclTerraform(this._ruleAction),
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
      source_content: {
        value: cdktf.stringToHclTerraform(this._sourceContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_content: {
        value: cdktf.stringToHclTerraform(this._targetContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
