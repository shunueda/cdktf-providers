// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallPrivateDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#access_instance_name CloudFirewallPrivateDns#access_instance_name}
  */
  readonly accessInstanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#domain_name_list CloudFirewallPrivateDns#domain_name_list}
  */
  readonly domainNameList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#firewall_type CloudFirewallPrivateDns#firewall_type}
  */
  readonly firewallType: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#id CloudFirewallPrivateDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#ip_protocol CloudFirewallPrivateDns#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#member_uid CloudFirewallPrivateDns#member_uid}
  */
  readonly memberUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#port CloudFirewallPrivateDns#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#primary_dns CloudFirewallPrivateDns#primary_dns}
  */
  readonly primaryDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#primary_vswitch_id CloudFirewallPrivateDns#primary_vswitch_id}
  */
  readonly primaryVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#primary_vswitch_ip CloudFirewallPrivateDns#primary_vswitch_ip}
  */
  readonly primaryVswitchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#private_dns_type CloudFirewallPrivateDns#private_dns_type}
  */
  readonly privateDnsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#region_no CloudFirewallPrivateDns#region_no}
  */
  readonly regionNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#standby_dns CloudFirewallPrivateDns#standby_dns}
  */
  readonly standbyDns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#standby_vswitch_id CloudFirewallPrivateDns#standby_vswitch_id}
  */
  readonly standbyVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#standby_vswitch_ip CloudFirewallPrivateDns#standby_vswitch_ip}
  */
  readonly standbyVswitchIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#vpc_id CloudFirewallPrivateDns#vpc_id}
  */
  readonly vpcId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#timeouts CloudFirewallPrivateDns#timeouts}
  */
  readonly timeouts?: CloudFirewallPrivateDnsTimeouts;
}
export interface CloudFirewallPrivateDnsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#create CloudFirewallPrivateDns#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#delete CloudFirewallPrivateDns#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#update CloudFirewallPrivateDns#update}
  */
  readonly update?: string;
}

export function cloudFirewallPrivateDnsTimeoutsToTerraform(struct?: CloudFirewallPrivateDnsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudFirewallPrivateDnsTimeoutsToHclTerraform(struct?: CloudFirewallPrivateDnsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallPrivateDnsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallPrivateDnsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallPrivateDnsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns alicloud_cloud_firewall_private_dns}
*/
export class CloudFirewallPrivateDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_private_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallPrivateDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallPrivateDns to import
  * @param importFromId The id of the existing CloudFirewallPrivateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallPrivateDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_private_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cloud_firewall_private_dns alicloud_cloud_firewall_private_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallPrivateDnsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallPrivateDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_private_dns',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessInstanceName = config.accessInstanceName;
    this._domainNameList = config.domainNameList;
    this._firewallType = config.firewallType;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._memberUid = config.memberUid;
    this._port = config.port;
    this._primaryDns = config.primaryDns;
    this._primaryVswitchId = config.primaryVswitchId;
    this._primaryVswitchIp = config.primaryVswitchIp;
    this._privateDnsType = config.privateDnsType;
    this._regionNo = config.regionNo;
    this._standbyDns = config.standbyDns;
    this._standbyVswitchId = config.standbyVswitchId;
    this._standbyVswitchIp = config.standbyVswitchIp;
    this._vpcId = config.vpcId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_instance_id - computed: true, optional: false, required: false
  public get accessInstanceId() {
    return this.getStringAttribute('access_instance_id');
  }

  // access_instance_name - computed: false, optional: false, required: true
  private _accessInstanceName?: string; 
  public get accessInstanceName() {
    return this.getStringAttribute('access_instance_name');
  }
  public set accessInstanceName(value: string) {
    this._accessInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInstanceNameInput() {
    return this._accessInstanceName;
  }

  // domain_name_list - computed: false, optional: true, required: false
  private _domainNameList?: string[]; 
  public get domainNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_name_list'));
  }
  public set domainNameList(value: string[]) {
    this._domainNameList = value;
  }
  public resetDomainNameList() {
    this._domainNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameListInput() {
    return this._domainNameList;
  }

  // firewall_type - computed: false, optional: false, required: true
  private _firewallType?: string[]; 
  public get firewallType() {
    return this.getListAttribute('firewall_type');
  }
  public set firewallType(value: string[]) {
    this._firewallType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallTypeInput() {
    return this._firewallType;
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

  // ip_protocol - computed: false, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // member_uid - computed: false, optional: true, required: false
  private _memberUid?: number; 
  public get memberUid() {
    return this.getNumberAttribute('member_uid');
  }
  public set memberUid(value: number) {
    this._memberUid = value;
  }
  public resetMemberUid() {
    this._memberUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUidInput() {
    return this._memberUid;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // primary_dns - computed: false, optional: true, required: false
  private _primaryDns?: string; 
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }
  public set primaryDns(value: string) {
    this._primaryDns = value;
  }
  public resetPrimaryDns() {
    this._primaryDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryDnsInput() {
    return this._primaryDns;
  }

  // primary_vswitch_id - computed: false, optional: true, required: false
  private _primaryVswitchId?: string; 
  public get primaryVswitchId() {
    return this.getStringAttribute('primary_vswitch_id');
  }
  public set primaryVswitchId(value: string) {
    this._primaryVswitchId = value;
  }
  public resetPrimaryVswitchId() {
    this._primaryVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVswitchIdInput() {
    return this._primaryVswitchId;
  }

  // primary_vswitch_ip - computed: false, optional: true, required: false
  private _primaryVswitchIp?: string; 
  public get primaryVswitchIp() {
    return this.getStringAttribute('primary_vswitch_ip');
  }
  public set primaryVswitchIp(value: string) {
    this._primaryVswitchIp = value;
  }
  public resetPrimaryVswitchIp() {
    this._primaryVswitchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVswitchIpInput() {
    return this._primaryVswitchIp;
  }

  // private_dns_type - computed: false, optional: false, required: true
  private _privateDnsType?: string; 
  public get privateDnsType() {
    return this.getStringAttribute('private_dns_type');
  }
  public set privateDnsType(value: string) {
    this._privateDnsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsTypeInput() {
    return this._privateDnsType;
  }

  // region_no - computed: false, optional: false, required: true
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
  }

  // standby_dns - computed: false, optional: true, required: false
  private _standbyDns?: string; 
  public get standbyDns() {
    return this.getStringAttribute('standby_dns');
  }
  public set standbyDns(value: string) {
    this._standbyDns = value;
  }
  public resetStandbyDns() {
    this._standbyDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDnsInput() {
    return this._standbyDns;
  }

  // standby_vswitch_id - computed: false, optional: true, required: false
  private _standbyVswitchId?: string; 
  public get standbyVswitchId() {
    return this.getStringAttribute('standby_vswitch_id');
  }
  public set standbyVswitchId(value: string) {
    this._standbyVswitchId = value;
  }
  public resetStandbyVswitchId() {
    this._standbyVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyVswitchIdInput() {
    return this._standbyVswitchId;
  }

  // standby_vswitch_ip - computed: false, optional: true, required: false
  private _standbyVswitchIp?: string; 
  public get standbyVswitchIp() {
    return this.getStringAttribute('standby_vswitch_ip');
  }
  public set standbyVswitchIp(value: string) {
    this._standbyVswitchIp = value;
  }
  public resetStandbyVswitchIp() {
    this._standbyVswitchIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyVswitchIpInput() {
    return this._standbyVswitchIp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallPrivateDnsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallPrivateDnsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_instance_name: cdktf.stringToTerraform(this._accessInstanceName),
      domain_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNameList),
      firewall_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firewallType),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      member_uid: cdktf.numberToTerraform(this._memberUid),
      port: cdktf.numberToTerraform(this._port),
      primary_dns: cdktf.stringToTerraform(this._primaryDns),
      primary_vswitch_id: cdktf.stringToTerraform(this._primaryVswitchId),
      primary_vswitch_ip: cdktf.stringToTerraform(this._primaryVswitchIp),
      private_dns_type: cdktf.stringToTerraform(this._privateDnsType),
      region_no: cdktf.stringToTerraform(this._regionNo),
      standby_dns: cdktf.stringToTerraform(this._standbyDns),
      standby_vswitch_id: cdktf.stringToTerraform(this._standbyVswitchId),
      standby_vswitch_ip: cdktf.stringToTerraform(this._standbyVswitchIp),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      timeouts: cloudFirewallPrivateDnsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_instance_name: {
        value: cdktf.stringToHclTerraform(this._accessInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      firewall_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firewallType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uid: {
        value: cdktf.numberToHclTerraform(this._memberUid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_dns: {
        value: cdktf.stringToHclTerraform(this._primaryDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._primaryVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_vswitch_ip: {
        value: cdktf.stringToHclTerraform(this._primaryVswitchIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_dns_type: {
        value: cdktf.stringToHclTerraform(this._privateDnsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_no: {
        value: cdktf.stringToHclTerraform(this._regionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_dns: {
        value: cdktf.stringToHclTerraform(this._standbyDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._standbyVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_vswitch_ip: {
        value: cdktf.stringToHclTerraform(this._standbyVswitchIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudFirewallPrivateDnsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallPrivateDnsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
