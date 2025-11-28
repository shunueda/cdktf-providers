// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsComputeInstanceCloneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#admin_pass EcsComputeInstanceClone#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#id EcsComputeInstanceClone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#instance_id EcsComputeInstanceClone#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#key_pair EcsComputeInstanceClone#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#name EcsComputeInstanceClone#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#power_on EcsComputeInstanceClone#power_on}
  */
  readonly powerOn: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#retain_passwd EcsComputeInstanceClone#retain_passwd}
  */
  readonly retainPasswd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#vpc_id EcsComputeInstanceClone#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#network EcsComputeInstanceClone#network}
  */
  readonly network?: EcsComputeInstanceCloneNetwork[] | cdktf.IResolvable;
}
export interface EcsComputeInstanceCloneNetworkSecurityGroupIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#security_group_id EcsComputeInstanceClone#security_group_id}
  */
  readonly securityGroupId?: string;
}

export function ecsComputeInstanceCloneNetworkSecurityGroupIdsToTerraform(struct?: EcsComputeInstanceCloneNetworkSecurityGroupIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
  }
}


export function ecsComputeInstanceCloneNetworkSecurityGroupIdsToHclTerraform(struct?: EcsComputeInstanceCloneNetworkSecurityGroupIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsComputeInstanceCloneNetworkSecurityGroupIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsComputeInstanceCloneNetworkSecurityGroupIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsComputeInstanceCloneNetworkSecurityGroupIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupId = value.securityGroupId;
    }
  }

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }
}

export class EcsComputeInstanceCloneNetworkSecurityGroupIdsList extends cdktf.ComplexList {
  public internalValue? : EcsComputeInstanceCloneNetworkSecurityGroupIds[] | cdktf.IResolvable

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
  public get(index: number): EcsComputeInstanceCloneNetworkSecurityGroupIdsOutputReference {
    return new EcsComputeInstanceCloneNetworkSecurityGroupIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsComputeInstanceCloneNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#fixed_ip_v4 EcsComputeInstanceClone#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#fixed_ip_v6 EcsComputeInstanceClone#fixed_ip_v6}
  */
  readonly fixedIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#ipv6_enable EcsComputeInstanceClone#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#subnet_id EcsComputeInstanceClone#subnet_id}
  */
  readonly subnetId: string;
  /**
  * security_group_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#security_group_ids EcsComputeInstanceClone#security_group_ids}
  */
  readonly securityGroupIds?: EcsComputeInstanceCloneNetworkSecurityGroupIds[] | cdktf.IResolvable;
}

export function ecsComputeInstanceCloneNetworkToTerraform(struct?: EcsComputeInstanceCloneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    fixed_ip_v6: cdktf.stringToTerraform(struct!.fixedIpV6),
    ipv6_enable: cdktf.booleanToTerraform(struct!.ipv6Enable),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    security_group_ids: cdktf.listMapper(ecsComputeInstanceCloneNetworkSecurityGroupIdsToTerraform, true)(struct!.securityGroupIds),
  }
}


export function ecsComputeInstanceCloneNetworkToHclTerraform(struct?: EcsComputeInstanceCloneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.fixedIpV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_v6: {
      value: cdktf.stringToHclTerraform(struct!.fixedIpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_enable: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(ecsComputeInstanceCloneNetworkSecurityGroupIdsToHclTerraform, true)(struct!.securityGroupIds),
      isBlock: true,
      type: "list",
      storageClassType: "EcsComputeInstanceCloneNetworkSecurityGroupIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsComputeInstanceCloneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EcsComputeInstanceCloneNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV4 = this._fixedIpV4;
    }
    if (this._fixedIpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV6 = this._fixedIpV6;
    }
    if (this._ipv6Enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Enable = this._ipv6Enable;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._securityGroupIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsComputeInstanceCloneNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fixedIpV4 = undefined;
      this._fixedIpV6 = undefined;
      this._ipv6Enable = undefined;
      this._subnetId = undefined;
      this._securityGroupIds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fixedIpV4 = value.fixedIpV4;
      this._fixedIpV6 = value.fixedIpV6;
      this._ipv6Enable = value.ipv6Enable;
      this._subnetId = value.subnetId;
      this._securityGroupIds.internalValue = value.securityGroupIds;
    }
  }

  // fixed_ip_v4 - computed: false, optional: true, required: false
  private _fixedIpV4?: string; 
  public get fixedIpV4() {
    return this.getStringAttribute('fixed_ip_v4');
  }
  public set fixedIpV4(value: string) {
    this._fixedIpV4 = value;
  }
  public resetFixedIpV4() {
    this._fixedIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV4Input() {
    return this._fixedIpV4;
  }

  // fixed_ip_v6 - computed: false, optional: true, required: false
  private _fixedIpV6?: string; 
  public get fixedIpV6() {
    return this.getStringAttribute('fixed_ip_v6');
  }
  public set fixedIpV6(value: string) {
    this._fixedIpV6 = value;
  }
  public resetFixedIpV6() {
    this._fixedIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV6Input() {
    return this._fixedIpV6;
  }

  // ipv6_enable - computed: false, optional: true, required: false
  private _ipv6Enable?: boolean | cdktf.IResolvable; 
  public get ipv6Enable() {
    return this.getBooleanAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: boolean | cdktf.IResolvable) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds = new EcsComputeInstanceCloneNetworkSecurityGroupIdsList(this, "security_group_ids", false);
  public get securityGroupIds() {
    return this._securityGroupIds;
  }
  public putSecurityGroupIds(value: EcsComputeInstanceCloneNetworkSecurityGroupIds[] | cdktf.IResolvable) {
    this._securityGroupIds.internalValue = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds.internalValue;
  }
}

export class EcsComputeInstanceCloneNetworkList extends cdktf.ComplexList {
  public internalValue? : EcsComputeInstanceCloneNetwork[] | cdktf.IResolvable

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
  public get(index: number): EcsComputeInstanceCloneNetworkOutputReference {
    return new EcsComputeInstanceCloneNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone hcs_ecs_compute_instance_clone}
*/
export class EcsComputeInstanceClone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_ecs_compute_instance_clone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsComputeInstanceClone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsComputeInstanceClone to import
  * @param importFromId The id of the existing EcsComputeInstanceClone that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsComputeInstanceClone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_ecs_compute_instance_clone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.21/docs/resources/ecs_compute_instance_clone hcs_ecs_compute_instance_clone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsComputeInstanceCloneConfig
  */
  public constructor(scope: Construct, id: string, config: EcsComputeInstanceCloneConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_ecs_compute_instance_clone',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.21',
        providerVersionConstraint: '2.4.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminPass = config.adminPass;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._keyPair = config.keyPair;
    this._name = config.name;
    this._powerOn = config.powerOn;
    this._retainPasswd = config.retainPasswd;
    this._vpcId = config.vpcId;
    this._network.internalValue = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // power_on - computed: false, optional: false, required: true
  private _powerOn?: boolean | cdktf.IResolvable; 
  public get powerOn() {
    return this.getBooleanAttribute('power_on');
  }
  public set powerOn(value: boolean | cdktf.IResolvable) {
    this._powerOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get powerOnInput() {
    return this._powerOn;
  }

  // retain_passwd - computed: false, optional: true, required: false
  private _retainPasswd?: boolean | cdktf.IResolvable; 
  public get retainPasswd() {
    return this.getBooleanAttribute('retain_passwd');
  }
  public set retainPasswd(value: boolean | cdktf.IResolvable) {
    this._retainPasswd = value;
  }
  public resetRetainPasswd() {
    this._retainPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPasswdInput() {
    return this._retainPasswd;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // network - computed: false, optional: true, required: false
  private _network = new EcsComputeInstanceCloneNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: EcsComputeInstanceCloneNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      name: cdktf.stringToTerraform(this._name),
      power_on: cdktf.booleanToTerraform(this._powerOn),
      retain_passwd: cdktf.booleanToTerraform(this._retainPasswd),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      network: cdktf.listMapper(ecsComputeInstanceCloneNetworkToTerraform, true)(this._network.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_pass: {
        value: cdktf.stringToHclTerraform(this._adminPass),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair: {
        value: cdktf.stringToHclTerraform(this._keyPair),
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
      power_on: {
        value: cdktf.booleanToHclTerraform(this._powerOn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retain_passwd: {
        value: cdktf.booleanToHclTerraform(this._retainPasswd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.listMapperHcl(ecsComputeInstanceCloneNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsComputeInstanceCloneNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
