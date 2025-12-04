// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsDedicatedInstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#access_user DmsDedicatedInstanceV2#access_user}
  */
  readonly accessUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#arch_type DmsDedicatedInstanceV2#arch_type}
  */
  readonly archType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#available_zones DmsDedicatedInstanceV2#available_zones}
  */
  readonly availableZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#broker_num DmsDedicatedInstanceV2#broker_num}
  */
  readonly brokerNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#description DmsDedicatedInstanceV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#disk_encrypted_enable DmsDedicatedInstanceV2#disk_encrypted_enable}
  */
  readonly diskEncryptedEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#disk_encrypted_key DmsDedicatedInstanceV2#disk_encrypted_key}
  */
  readonly diskEncryptedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#enable_publicip DmsDedicatedInstanceV2#enable_publicip}
  */
  readonly enablePublicip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#enabled_mechanisms DmsDedicatedInstanceV2#enabled_mechanisms}
  */
  readonly enabledMechanisms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#engine_version DmsDedicatedInstanceV2#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#flavor_id DmsDedicatedInstanceV2#flavor_id}
  */
  readonly flavorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#id DmsDedicatedInstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#ipv6_enable DmsDedicatedInstanceV2#ipv6_enable}
  */
  readonly ipv6Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#maintain_begin DmsDedicatedInstanceV2#maintain_begin}
  */
  readonly maintainBegin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#maintain_end DmsDedicatedInstanceV2#maintain_end}
  */
  readonly maintainEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#name DmsDedicatedInstanceV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#network_id DmsDedicatedInstanceV2#network_id}
  */
  readonly networkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#new_tenant_ips DmsDedicatedInstanceV2#new_tenant_ips}
  */
  readonly newTenantIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#password DmsDedicatedInstanceV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#publicip_id DmsDedicatedInstanceV2#publicip_id}
  */
  readonly publicipId?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#retention_policy DmsDedicatedInstanceV2#retention_policy}
  */
  readonly retentionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#security_group_id DmsDedicatedInstanceV2#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#security_protocol DmsDedicatedInstanceV2#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#ssl_enable DmsDedicatedInstanceV2#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#storage_space DmsDedicatedInstanceV2#storage_space}
  */
  readonly storageSpace: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#storage_spec_code DmsDedicatedInstanceV2#storage_spec_code}
  */
  readonly storageSpecCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#tags DmsDedicatedInstanceV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#vpc_id DmsDedicatedInstanceV2#vpc_id}
  */
  readonly vpcId: string;
  /**
  * cross_vpc_accesses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#cross_vpc_accesses DmsDedicatedInstanceV2#cross_vpc_accesses}
  */
  readonly crossVpcAccesses?: DmsDedicatedInstanceV2CrossVpcAccesses[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#timeouts DmsDedicatedInstanceV2#timeouts}
  */
  readonly timeouts?: DmsDedicatedInstanceV2Timeouts;
}
export interface DmsDedicatedInstanceV2CrossVpcAccesses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#advertised_ip DmsDedicatedInstanceV2#advertised_ip}
  */
  readonly advertisedIp?: string;
}

export function dmsDedicatedInstanceV2CrossVpcAccessesToTerraform(struct?: DmsDedicatedInstanceV2CrossVpcAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_ip: cdktf.stringToTerraform(struct!.advertisedIp),
  }
}


export function dmsDedicatedInstanceV2CrossVpcAccessesToHclTerraform(struct?: DmsDedicatedInstanceV2CrossVpcAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_ip: {
      value: cdktf.stringToHclTerraform(struct!.advertisedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsDedicatedInstanceV2CrossVpcAccessesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DmsDedicatedInstanceV2CrossVpcAccesses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedIp = this._advertisedIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsDedicatedInstanceV2CrossVpcAccesses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedIp = value.advertisedIp;
    }
  }

  // advertised_ip - computed: true, optional: true, required: false
  private _advertisedIp?: string; 
  public get advertisedIp() {
    return this.getStringAttribute('advertised_ip');
  }
  public set advertisedIp(value: string) {
    this._advertisedIp = value;
  }
  public resetAdvertisedIp() {
    this._advertisedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedIpInput() {
    return this._advertisedIp;
  }

  // listener_ip - computed: true, optional: false, required: false
  public get listenerIp() {
    return this.getStringAttribute('listener_ip');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_id - computed: true, optional: false, required: false
  public get portId() {
    return this.getStringAttribute('port_id');
  }
}

export class DmsDedicatedInstanceV2CrossVpcAccessesList extends cdktf.ComplexList {
  public internalValue? : DmsDedicatedInstanceV2CrossVpcAccesses[] | cdktf.IResolvable

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
  public get(index: number): DmsDedicatedInstanceV2CrossVpcAccessesOutputReference {
    return new DmsDedicatedInstanceV2CrossVpcAccessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsDedicatedInstanceV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#create DmsDedicatedInstanceV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#delete DmsDedicatedInstanceV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#update DmsDedicatedInstanceV2#update}
  */
  readonly update?: string;
}

export function dmsDedicatedInstanceV2TimeoutsToTerraform(struct?: DmsDedicatedInstanceV2Timeouts | cdktf.IResolvable): any {
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


export function dmsDedicatedInstanceV2TimeoutsToHclTerraform(struct?: DmsDedicatedInstanceV2Timeouts | cdktf.IResolvable): any {
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

export class DmsDedicatedInstanceV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsDedicatedInstanceV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DmsDedicatedInstanceV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2 opentelekomcloud_dms_dedicated_instance_v2}
*/
export class DmsDedicatedInstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_dedicated_instance_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsDedicatedInstanceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsDedicatedInstanceV2 to import
  * @param importFromId The id of the existing DmsDedicatedInstanceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsDedicatedInstanceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dms_dedicated_instance_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/dms_dedicated_instance_v2 opentelekomcloud_dms_dedicated_instance_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsDedicatedInstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: DmsDedicatedInstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_dedicated_instance_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.54',
        providerVersionConstraint: '1.36.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessUser = config.accessUser;
    this._archType = config.archType;
    this._availableZones = config.availableZones;
    this._brokerNum = config.brokerNum;
    this._description = config.description;
    this._diskEncryptedEnable = config.diskEncryptedEnable;
    this._diskEncryptedKey = config.diskEncryptedKey;
    this._enablePublicip = config.enablePublicip;
    this._enabledMechanisms = config.enabledMechanisms;
    this._engineVersion = config.engineVersion;
    this._flavorId = config.flavorId;
    this._id = config.id;
    this._ipv6Enable = config.ipv6Enable;
    this._maintainBegin = config.maintainBegin;
    this._maintainEnd = config.maintainEnd;
    this._name = config.name;
    this._networkId = config.networkId;
    this._newTenantIps = config.newTenantIps;
    this._password = config.password;
    this._publicipId = config.publicipId;
    this._retentionPolicy = config.retentionPolicy;
    this._securityGroupId = config.securityGroupId;
    this._securityProtocol = config.securityProtocol;
    this._sslEnable = config.sslEnable;
    this._storageSpace = config.storageSpace;
    this._storageSpecCode = config.storageSpecCode;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._crossVpcAccesses.internalValue = config.crossVpcAccesses;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_user - computed: false, optional: true, required: false
  private _accessUser?: string; 
  public get accessUser() {
    return this.getStringAttribute('access_user');
  }
  public set accessUser(value: string) {
    this._accessUser = value;
  }
  public resetAccessUser() {
    this._accessUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessUserInput() {
    return this._accessUser;
  }

  // arch_type - computed: false, optional: true, required: false
  private _archType?: string; 
  public get archType() {
    return this.getStringAttribute('arch_type');
  }
  public set archType(value: string) {
    this._archType = value;
  }
  public resetArchType() {
    this._archType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archTypeInput() {
    return this._archType;
  }

  // available_zones - computed: true, optional: true, required: false
  private _availableZones?: string[]; 
  public get availableZones() {
    return this.getListAttribute('available_zones');
  }
  public set availableZones(value: string[]) {
    this._availableZones = value;
  }
  public resetAvailableZones() {
    this._availableZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZonesInput() {
    return this._availableZones;
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }

  // broker_num - computed: false, optional: false, required: true
  private _brokerNum?: number; 
  public get brokerNum() {
    return this.getNumberAttribute('broker_num');
  }
  public set brokerNum(value: number) {
    this._brokerNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerNumInput() {
    return this._brokerNum;
  }

  // cert_replaced - computed: true, optional: false, required: false
  public get certReplaced() {
    return this.getBooleanAttribute('cert_replaced');
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // connector_node_num - computed: true, optional: false, required: false
  public get connectorNodeNum() {
    return this.getNumberAttribute('connector_node_num');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // disk_encrypted_enable - computed: true, optional: true, required: false
  private _diskEncryptedEnable?: boolean | cdktf.IResolvable; 
  public get diskEncryptedEnable() {
    return this.getBooleanAttribute('disk_encrypted_enable');
  }
  public set diskEncryptedEnable(value: boolean | cdktf.IResolvable) {
    this._diskEncryptedEnable = value;
  }
  public resetDiskEncryptedEnable() {
    this._diskEncryptedEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptedEnableInput() {
    return this._diskEncryptedEnable;
  }

  // disk_encrypted_key - computed: true, optional: true, required: false
  private _diskEncryptedKey?: string; 
  public get diskEncryptedKey() {
    return this.getStringAttribute('disk_encrypted_key');
  }
  public set diskEncryptedKey(value: string) {
    this._diskEncryptedKey = value;
  }
  public resetDiskEncryptedKey() {
    this._diskEncryptedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptedKeyInput() {
    return this._diskEncryptedKey;
  }

  // dumping - computed: true, optional: false, required: false
  public get dumping() {
    return this.getBooleanAttribute('dumping');
  }

  // enable_publicip - computed: true, optional: true, required: false
  private _enablePublicip?: boolean | cdktf.IResolvable; 
  public get enablePublicip() {
    return this.getBooleanAttribute('enable_publicip');
  }
  public set enablePublicip(value: boolean | cdktf.IResolvable) {
    this._enablePublicip = value;
  }
  public resetEnablePublicip() {
    this._enablePublicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicipInput() {
    return this._enablePublicip;
  }

  // enabled_mechanisms - computed: false, optional: true, required: false
  private _enabledMechanisms?: string[]; 
  public get enabledMechanisms() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_mechanisms'));
  }
  public set enabledMechanisms(value: string[]) {
    this._enabledMechanisms = value;
  }
  public resetEnabledMechanisms() {
    this._enabledMechanisms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMechanismsInput() {
    return this._enabledMechanisms;
  }

  // engine - computed: true, optional: false, required: false
  public get engine() {
    return this.getStringAttribute('engine');
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // flavor_id - computed: false, optional: false, required: true
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
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

  // ipv6_enable - computed: true, optional: true, required: false
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

  // maintain_begin - computed: true, optional: true, required: false
  private _maintainBegin?: string; 
  public get maintainBegin() {
    return this.getStringAttribute('maintain_begin');
  }
  public set maintainBegin(value: string) {
    this._maintainBegin = value;
  }
  public resetMaintainBegin() {
    this._maintainBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainBeginInput() {
    return this._maintainBegin;
  }

  // maintain_end - computed: true, optional: true, required: false
  private _maintainEnd?: string; 
  public get maintainEnd() {
    return this.getStringAttribute('maintain_end');
  }
  public set maintainEnd(value: string) {
    this._maintainEnd = value;
  }
  public resetMaintainEnd() {
    this._maintainEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintainEndInput() {
    return this._maintainEnd;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // new_tenant_ips - computed: false, optional: true, required: false
  private _newTenantIps?: string[]; 
  public get newTenantIps() {
    return this.getListAttribute('new_tenant_ips');
  }
  public set newTenantIps(value: string[]) {
    this._newTenantIps = value;
  }
  public resetNewTenantIps() {
    this._newTenantIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTenantIpsInput() {
    return this._newTenantIps;
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // partition_num - computed: true, optional: false, required: false
  public get partitionNum() {
    return this.getNumberAttribute('partition_num');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pod_connect_address - computed: true, optional: false, required: false
  public get podConnectAddress() {
    return this.getStringAttribute('pod_connect_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // public_bandwidth - computed: true, optional: false, required: false
  public get publicBandwidth() {
    return this.getNumberAttribute('public_bandwidth');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // publicip_id - computed: false, optional: true, required: false
  private _publicipId?: string[]; 
  public get publicipId() {
    return this.getListAttribute('publicip_id');
  }
  public set publicipId(value: string[]) {
    this._publicipId = value;
  }
  public resetPublicipId() {
    this._publicipId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipIdInput() {
    return this._publicipId;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_spec_code - computed: true, optional: false, required: false
  public get resourceSpecCode() {
    return this.getStringAttribute('resource_spec_code');
  }

  // retention_policy - computed: true, optional: true, required: false
  private _retentionPolicy?: string; 
  public get retentionPolicy() {
    return this.getStringAttribute('retention_policy');
  }
  public set retentionPolicy(value: string) {
    this._retentionPolicy = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy;
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

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // ssl_enable - computed: true, optional: true, required: false
  private _sslEnable?: boolean | cdktf.IResolvable; 
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }
  public set sslEnable(value: boolean | cdktf.IResolvable) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // ssl_two_way_enable - computed: true, optional: false, required: false
  public get sslTwoWayEnable() {
    return this.getBooleanAttribute('ssl_two_way_enable');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_resource_id - computed: true, optional: false, required: false
  public get storageResourceId() {
    return this.getStringAttribute('storage_resource_id');
  }

  // storage_space - computed: false, optional: false, required: true
  private _storageSpace?: number; 
  public get storageSpace() {
    return this.getNumberAttribute('storage_space');
  }
  public set storageSpace(value: number) {
    this._storageSpace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpaceInput() {
    return this._storageSpace;
  }

  // storage_spec_code - computed: false, optional: false, required: true
  private _storageSpecCode?: string; 
  public get storageSpecCode() {
    return this.getStringAttribute('storage_spec_code');
  }
  public set storageSpecCode(value: string) {
    this._storageSpecCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSpecCodeInput() {
    return this._storageSpecCode;
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // used_storage_space - computed: true, optional: false, required: false
  public get usedStorageSpace() {
    return this.getNumberAttribute('used_storage_space');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
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

  // cross_vpc_accesses - computed: false, optional: true, required: false
  private _crossVpcAccesses = new DmsDedicatedInstanceV2CrossVpcAccessesList(this, "cross_vpc_accesses", false);
  public get crossVpcAccesses() {
    return this._crossVpcAccesses;
  }
  public putCrossVpcAccesses(value: DmsDedicatedInstanceV2CrossVpcAccesses[] | cdktf.IResolvable) {
    this._crossVpcAccesses.internalValue = value;
  }
  public resetCrossVpcAccesses() {
    this._crossVpcAccesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossVpcAccessesInput() {
    return this._crossVpcAccesses.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsDedicatedInstanceV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsDedicatedInstanceV2Timeouts) {
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
      access_user: cdktf.stringToTerraform(this._accessUser),
      arch_type: cdktf.stringToTerraform(this._archType),
      available_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availableZones),
      broker_num: cdktf.numberToTerraform(this._brokerNum),
      description: cdktf.stringToTerraform(this._description),
      disk_encrypted_enable: cdktf.booleanToTerraform(this._diskEncryptedEnable),
      disk_encrypted_key: cdktf.stringToTerraform(this._diskEncryptedKey),
      enable_publicip: cdktf.booleanToTerraform(this._enablePublicip),
      enabled_mechanisms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledMechanisms),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      id: cdktf.stringToTerraform(this._id),
      ipv6_enable: cdktf.booleanToTerraform(this._ipv6Enable),
      maintain_begin: cdktf.stringToTerraform(this._maintainBegin),
      maintain_end: cdktf.stringToTerraform(this._maintainEnd),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      new_tenant_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._newTenantIps),
      password: cdktf.stringToTerraform(this._password),
      publicip_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicipId),
      retention_policy: cdktf.stringToTerraform(this._retentionPolicy),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      security_protocol: cdktf.stringToTerraform(this._securityProtocol),
      ssl_enable: cdktf.booleanToTerraform(this._sslEnable),
      storage_space: cdktf.numberToTerraform(this._storageSpace),
      storage_spec_code: cdktf.stringToTerraform(this._storageSpecCode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      cross_vpc_accesses: cdktf.listMapper(dmsDedicatedInstanceV2CrossVpcAccessesToTerraform, true)(this._crossVpcAccesses.internalValue),
      timeouts: dmsDedicatedInstanceV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_user: {
        value: cdktf.stringToHclTerraform(this._accessUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch_type: {
        value: cdktf.stringToHclTerraform(this._archType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      available_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availableZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      broker_num: {
        value: cdktf.numberToHclTerraform(this._brokerNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encrypted_enable: {
        value: cdktf.booleanToHclTerraform(this._diskEncryptedEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_encrypted_key: {
        value: cdktf.stringToHclTerraform(this._diskEncryptedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_publicip: {
        value: cdktf.booleanToHclTerraform(this._enablePublicip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled_mechanisms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledMechanisms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
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
      ipv6_enable: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maintain_begin: {
        value: cdktf.stringToHclTerraform(this._maintainBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintain_end: {
        value: cdktf.stringToHclTerraform(this._maintainEnd),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_tenant_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._newTenantIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicip_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicipId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      retention_policy: {
        value: cdktf.stringToHclTerraform(this._retentionPolicy),
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
      security_protocol: {
        value: cdktf.stringToHclTerraform(this._securityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enable: {
        value: cdktf.booleanToHclTerraform(this._sslEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage_space: {
        value: cdktf.numberToHclTerraform(this._storageSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_spec_code: {
        value: cdktf.stringToHclTerraform(this._storageSpecCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_vpc_accesses: {
        value: cdktf.listMapperHcl(dmsDedicatedInstanceV2CrossVpcAccessesToHclTerraform, true)(this._crossVpcAccesses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsDedicatedInstanceV2CrossVpcAccessesList",
      },
      timeouts: {
        value: dmsDedicatedInstanceV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsDedicatedInstanceV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
