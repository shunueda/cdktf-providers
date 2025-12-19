// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsUnicastElectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#id VcsUnicastElection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Destination port for unicast election packet (Destination port for unicast election packet (default 41217))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#port VcsUnicastElection#port}
  */
  readonly port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#uuid VcsUnicastElection#uuid}
  */
  readonly uuid?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#members VcsUnicastElection#members}
  */
  readonly members?: VcsUnicastElectionMembers;
}
export interface VcsUnicastElectionMembersIpAddressCfg {
  /**
  * IP Address of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#ip_address VcsUnicastElection#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Use management port for connections in different subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#use_mgmt_port VcsUnicastElection#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function vcsUnicastElectionMembersIpAddressCfgToTerraform(struct?: VcsUnicastElectionMembersIpAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function vcsUnicastElectionMembersIpAddressCfgToHclTerraform(struct?: VcsUnicastElectionMembersIpAddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsUnicastElectionMembersIpAddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsUnicastElectionMembersIpAddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsUnicastElectionMembersIpAddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._useMgmtPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}

export class VcsUnicastElectionMembersIpAddressCfgList extends cdktf.ComplexList {
  public internalValue? : VcsUnicastElectionMembersIpAddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VcsUnicastElectionMembersIpAddressCfgOutputReference {
    return new VcsUnicastElectionMembersIpAddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VcsUnicastElectionMembersIpv6AddressCfg {
  /**
  * IPV6 address of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#ipv6_address VcsUnicastElection#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Use management port for connections in different subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#use_mgmt_port VcsUnicastElection#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function vcsUnicastElectionMembersIpv6AddressCfgToTerraform(struct?: VcsUnicastElectionMembersIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function vcsUnicastElectionMembersIpv6AddressCfgToHclTerraform(struct?: VcsUnicastElectionMembersIpv6AddressCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsUnicastElectionMembersIpv6AddressCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsUnicastElectionMembersIpv6AddressCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsUnicastElectionMembersIpv6AddressCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Address = undefined;
      this._useMgmtPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Address = value.ipv6Address;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}

export class VcsUnicastElectionMembersIpv6AddressCfgList extends cdktf.ComplexList {
  public internalValue? : VcsUnicastElectionMembersIpv6AddressCfg[] | cdktf.IResolvable

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
  public get(index: number): VcsUnicastElectionMembersIpv6AddressCfgOutputReference {
    return new VcsUnicastElectionMembersIpv6AddressCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VcsUnicastElectionMembers {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#uuid VcsUnicastElection#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#ip_address_cfg VcsUnicastElection#ip_address_cfg}
  */
  readonly ipAddressCfg?: VcsUnicastElectionMembersIpAddressCfg[] | cdktf.IResolvable;
  /**
  * ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#ipv6_address_cfg VcsUnicastElection#ipv6_address_cfg}
  */
  readonly ipv6AddressCfg?: VcsUnicastElectionMembersIpv6AddressCfg[] | cdktf.IResolvable;
}

export function vcsUnicastElectionMembersToTerraform(struct?: VcsUnicastElectionMembersOutputReference | VcsUnicastElectionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_address_cfg: cdktf.listMapper(vcsUnicastElectionMembersIpAddressCfgToTerraform, true)(struct!.ipAddressCfg),
    ipv6_address_cfg: cdktf.listMapper(vcsUnicastElectionMembersIpv6AddressCfgToTerraform, true)(struct!.ipv6AddressCfg),
  }
}


export function vcsUnicastElectionMembersToHclTerraform(struct?: VcsUnicastElectionMembersOutputReference | VcsUnicastElectionMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_cfg: {
      value: cdktf.listMapperHcl(vcsUnicastElectionMembersIpAddressCfgToHclTerraform, true)(struct!.ipAddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VcsUnicastElectionMembersIpAddressCfgList",
    },
    ipv6_address_cfg: {
      value: cdktf.listMapperHcl(vcsUnicastElectionMembersIpv6AddressCfgToHclTerraform, true)(struct!.ipv6AddressCfg),
      isBlock: true,
      type: "list",
      storageClassType: "VcsUnicastElectionMembersIpv6AddressCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsUnicastElectionMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VcsUnicastElectionMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipAddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressCfg = this._ipAddressCfg?.internalValue;
    }
    if (this._ipv6AddressCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCfg = this._ipv6AddressCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsUnicastElectionMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ipAddressCfg.internalValue = undefined;
      this._ipv6AddressCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ipAddressCfg.internalValue = value.ipAddressCfg;
      this._ipv6AddressCfg.internalValue = value.ipv6AddressCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ip_address_cfg - computed: false, optional: true, required: false
  private _ipAddressCfg = new VcsUnicastElectionMembersIpAddressCfgList(this, "ip_address_cfg", false);
  public get ipAddressCfg() {
    return this._ipAddressCfg;
  }
  public putIpAddressCfg(value: VcsUnicastElectionMembersIpAddressCfg[] | cdktf.IResolvable) {
    this._ipAddressCfg.internalValue = value;
  }
  public resetIpAddressCfg() {
    this._ipAddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressCfgInput() {
    return this._ipAddressCfg.internalValue;
  }

  // ipv6_address_cfg - computed: false, optional: true, required: false
  private _ipv6AddressCfg = new VcsUnicastElectionMembersIpv6AddressCfgList(this, "ipv6_address_cfg", false);
  public get ipv6AddressCfg() {
    return this._ipv6AddressCfg;
  }
  public putIpv6AddressCfg(value: VcsUnicastElectionMembersIpv6AddressCfg[] | cdktf.IResolvable) {
    this._ipv6AddressCfg.internalValue = value;
  }
  public resetIpv6AddressCfg() {
    this._ipv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCfgInput() {
    return this._ipv6AddressCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election thunder_vcs_unicast_election}
*/
export class VcsUnicastElection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_unicast_election";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsUnicastElection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsUnicastElection to import
  * @param importFromId The id of the existing VcsUnicastElection that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsUnicastElection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_unicast_election", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_unicast_election thunder_vcs_unicast_election} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsUnicastElectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsUnicastElectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_unicast_election',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._port = config.port;
    this._uuid = config.uuid;
    this._members.internalValue = config.members;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // members - computed: false, optional: true, required: false
  private _members = new VcsUnicastElectionMembersOutputReference(this, "members");
  public get members() {
    return this._members;
  }
  public putMembers(value: VcsUnicastElectionMembers) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      uuid: cdktf.stringToTerraform(this._uuid),
      members: vcsUnicastElectionMembersToTerraform(this._members.internalValue),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: vcsUnicastElectionMembersToHclTerraform(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsUnicastElectionMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
