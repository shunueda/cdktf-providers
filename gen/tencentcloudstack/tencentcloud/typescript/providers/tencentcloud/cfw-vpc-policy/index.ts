// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwVpcPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#description CfwVpcPolicy#description}
  */
  readonly description: string;
  /**
  * Access purpose example: net:IP/CIDR(192.168.0.2) domain:domain rule, for example*.qq.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#dest_content CfwVpcPolicy#dest_content}
  */
  readonly destContent: string;
  /**
  * Access purpose type, the type can be: net, template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#dest_type CfwVpcPolicy#dest_type}
  */
  readonly destType: string;
  /**
  * Rule status, true means enabled, false means disabled. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#enable CfwVpcPolicy#enable}
  */
  readonly enable?: string;
  /**
  * Firewall instance ID where the rule takes effect. Default is ALL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#fw_group_id CfwVpcPolicy#fw_group_id}
  */
  readonly fwGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#id CfwVpcPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The port for the access control policy. Value: -1/-1: All ports; 80: port 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#port CfwVpcPolicy#port}
  */
  readonly port: string;
  /**
  * Protocol, optional value:TCP, UDP, ICMP, ANY, HTTP, HTTPS, HTTP/HTTPS, SMTP, SMTPS, SMTP/SMTPS, FTP, DNS, TLS/SSL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#protocol CfwVpcPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * How traffic set in the access control policy passes through the cloud firewall. Value: accept:accept, drop:drop, log:log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#rule_action CfwVpcPolicy#rule_action}
  */
  readonly ruleAction: string;
  /**
  * Access source examplnet:IP/CIDR(192.168.0.2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#source_content CfwVpcPolicy#source_content}
  */
  readonly sourceContent: string;
  /**
  * Access source type, the type can be: net, template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#source_type CfwVpcPolicy#source_type}
  */
  readonly sourceType: string;
}
export interface CfwVpcPolicyBetaListStruct {
}

export function cfwVpcPolicyBetaListStructToTerraform(struct?: CfwVpcPolicyBetaListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cfwVpcPolicyBetaListStructToHclTerraform(struct?: CfwVpcPolicyBetaListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CfwVpcPolicyBetaListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CfwVpcPolicyBetaListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwVpcPolicyBetaListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_time - computed: true, optional: false, required: false
  public get lastTime() {
    return this.getStringAttribute('last_time');
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getNumberAttribute('task_id');
  }

  // task_name - computed: true, optional: false, required: false
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
}

export class CfwVpcPolicyBetaListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CfwVpcPolicyBetaListStructOutputReference {
    return new CfwVpcPolicyBetaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy tencentcloud_cfw_vpc_policy}
*/
export class CfwVpcPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cfw_vpc_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwVpcPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwVpcPolicy to import
  * @param importFromId The id of the existing CfwVpcPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwVpcPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cfw_vpc_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cfw_vpc_policy tencentcloud_cfw_vpc_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwVpcPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CfwVpcPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cfw_vpc_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._destContent = config.destContent;
    this._destType = config.destType;
    this._enable = config.enable;
    this._fwGroupId = config.fwGroupId;
    this._id = config.id;
    this._port = config.port;
    this._protocol = config.protocol;
    this._ruleAction = config.ruleAction;
    this._sourceContent = config.sourceContent;
    this._sourceType = config.sourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta_list - computed: true, optional: false, required: false
  private _betaList = new CfwVpcPolicyBetaListStructList(this, "beta_list", false);
  public get betaList() {
    return this._betaList;
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

  // fw_group_id - computed: false, optional: true, required: false
  private _fwGroupId?: string; 
  public get fwGroupId() {
    return this.getStringAttribute('fw_group_id');
  }
  public set fwGroupId(value: string) {
    this._fwGroupId = value;
  }
  public resetFwGroupId() {
    this._fwGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwGroupIdInput() {
    return this._fwGroupId;
  }

  // fw_group_name - computed: true, optional: false, required: false
  public get fwGroupName() {
    return this.getStringAttribute('fw_group_name');
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

  // internal_uuid - computed: true, optional: false, required: false
  public get internalUuid() {
    return this.getNumberAttribute('internal_uuid');
  }

  // param_template_id - computed: true, optional: false, required: false
  public get paramTemplateId() {
    return this.getStringAttribute('param_template_id');
  }

  // param_template_name - computed: true, optional: false, required: false
  public get paramTemplateName() {
    return this.getStringAttribute('param_template_name');
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
      dest_content: cdktf.stringToTerraform(this._destContent),
      dest_type: cdktf.stringToTerraform(this._destType),
      enable: cdktf.stringToTerraform(this._enable),
      fw_group_id: cdktf.stringToTerraform(this._fwGroupId),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.stringToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_action: cdktf.stringToTerraform(this._ruleAction),
      source_content: cdktf.stringToTerraform(this._sourceContent),
      source_type: cdktf.stringToTerraform(this._sourceType),
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
      dest_content: {
        value: cdktf.stringToHclTerraform(this._destContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_type: {
        value: cdktf.stringToHclTerraform(this._destType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fw_group_id: {
        value: cdktf.stringToHclTerraform(this._fwGroupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
