// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbSecurityGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment#id ClbSecurityGroupAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Array of CLB instance IDs. Only support set one security group now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment#load_balancer_ids ClbSecurityGroupAttachment#load_balancer_ids}
  */
  readonly loadBalancerIds: string[];
  /**
  * Security group ID, such as esg-12345678.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment#security_group ClbSecurityGroupAttachment#security_group}
  */
  readonly securityGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment tencentcloud_clb_security_group_attachment}
*/
export class ClbSecurityGroupAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_security_group_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbSecurityGroupAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbSecurityGroupAttachment to import
  * @param importFromId The id of the existing ClbSecurityGroupAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbSecurityGroupAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_security_group_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/clb_security_group_attachment tencentcloud_clb_security_group_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbSecurityGroupAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ClbSecurityGroupAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_security_group_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._loadBalancerIds = config.loadBalancerIds;
    this._securityGroup = config.securityGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // load_balancer_ids - computed: false, optional: false, required: true
  private _loadBalancerIds?: string[]; 
  public get loadBalancerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('load_balancer_ids'));
  }
  public set loadBalancerIds(value: string[]) {
    this._loadBalancerIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdsInput() {
    return this._loadBalancerIds;
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loadBalancerIds),
      security_group: cdktf.stringToTerraform(this._securityGroup),
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
      load_balancer_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loadBalancerIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_group: {
        value: cdktf.stringToHclTerraform(this._securityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
