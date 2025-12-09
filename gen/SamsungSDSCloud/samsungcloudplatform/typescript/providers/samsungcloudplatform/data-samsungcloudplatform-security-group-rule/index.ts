// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformSecurityGroupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule#id DataSamsungcloudplatformSecurityGroupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule#rule_id DataSamsungcloudplatformSecurityGroupRule#rule_id}
  */
  readonly ruleId: string;
  /**
  * Security Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule#security_group_id DataSamsungcloudplatformSecurityGroupRule#security_group_id}
  */
  readonly securityGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule samsungcloudplatform_security_group_rule}
*/
export class DataSamsungcloudplatformSecurityGroupRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_security_group_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformSecurityGroupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformSecurityGroupRule to import
  * @param importFromId The id of the existing DataSamsungcloudplatformSecurityGroupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformSecurityGroupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_security_group_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/security_group_rule samsungcloudplatform_security_group_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformSecurityGroupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformSecurityGroupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_security_group_rule',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ruleId = config.ruleId;
    this._securityGroupId = config.securityGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // icmp_services - computed: true, optional: false, required: false
  public get icmpServices() {
    return this.getListAttribute('icmp_services');
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

  // is_all_service - computed: true, optional: false, required: false
  public get isAllService() {
    return this.getBooleanAttribute('is_all_service');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // rule_action - computed: true, optional: false, required: false
  public get ruleAction() {
    return this.getStringAttribute('rule_action');
  }

  // rule_description - computed: true, optional: false, required: false
  public get ruleDescription() {
    return this.getStringAttribute('rule_description');
  }

  // rule_direction - computed: true, optional: false, required: false
  public get ruleDirection() {
    return this.getStringAttribute('rule_direction');
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

  // rule_owner_id - computed: true, optional: false, required: false
  public get ruleOwnerId() {
    return this.getStringAttribute('rule_owner_id');
  }

  // rule_owner_type - computed: true, optional: false, required: false
  public get ruleOwnerType() {
    return this.getStringAttribute('rule_owner_type');
  }

  // rule_state - computed: true, optional: false, required: false
  public get ruleState() {
    return this.getStringAttribute('rule_state');
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // target_networks - computed: true, optional: false, required: false
  public get targetNetworks() {
    return this.getListAttribute('target_networks');
  }

  // tcp_services - computed: true, optional: false, required: false
  public get tcpServices() {
    return this.getListAttribute('tcp_services');
  }

  // udp_services - computed: true, optional: false, required: false
  public get udpServices() {
    return this.getListAttribute('udp_services');
  }

  // vendor_object_id - computed: true, optional: false, required: false
  public get vendorObjectId() {
    return this.getStringAttribute('vendor_object_id');
  }

  // vendor_rule_id - computed: true, optional: false, required: false
  public get vendorRuleId() {
    return this.getNumberAttribute('vendor_rule_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
