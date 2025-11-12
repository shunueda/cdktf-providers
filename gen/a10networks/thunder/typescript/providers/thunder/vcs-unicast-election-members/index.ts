// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsUnicastElectionMembersAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#id VcsUnicastElectionMembersA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#uuid VcsUnicastElectionMembersA#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#ip_address_cfg VcsUnicastElectionMembersA#ip_address_cfg}
  */
  readonly ipAddressCfg?: VcsUnicastElectionMembersIpAddressCfgA[] | cdktf.IResolvable;
  /**
  * ipv6_address_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#ipv6_address_cfg VcsUnicastElectionMembersA#ipv6_address_cfg}
  */
  readonly ipv6AddressCfg?: VcsUnicastElectionMembersIpv6AddressCfgA[] | cdktf.IResolvable;
}
export interface VcsUnicastElectionMembersIpAddressCfgA {
  /**
  * IP Address of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#ip_address VcsUnicastElectionMembersA#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Use management port for connections in different subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#use_mgmt_port VcsUnicastElectionMembersA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function vcsUnicastElectionMembersIpAddressCfgAToTerraform(struct?: VcsUnicastElectionMembersIpAddressCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function vcsUnicastElectionMembersIpAddressCfgAToHclTerraform(struct?: VcsUnicastElectionMembersIpAddressCfgA | cdktf.IResolvable): any {
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

export class VcsUnicastElectionMembersIpAddressCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsUnicastElectionMembersIpAddressCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VcsUnicastElectionMembersIpAddressCfgA | cdktf.IResolvable | undefined) {
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

export class VcsUnicastElectionMembersIpAddressCfgAList extends cdktf.ComplexList {
  public internalValue? : VcsUnicastElectionMembersIpAddressCfgA[] | cdktf.IResolvable

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
  public get(index: number): VcsUnicastElectionMembersIpAddressCfgAOutputReference {
    return new VcsUnicastElectionMembersIpAddressCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VcsUnicastElectionMembersIpv6AddressCfgA {
  /**
  * IPV6 address of the member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#ipv6_address VcsUnicastElectionMembersA#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Use management port for connections in different subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#use_mgmt_port VcsUnicastElectionMembersA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function vcsUnicastElectionMembersIpv6AddressCfgAToTerraform(struct?: VcsUnicastElectionMembersIpv6AddressCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function vcsUnicastElectionMembersIpv6AddressCfgAToHclTerraform(struct?: VcsUnicastElectionMembersIpv6AddressCfgA | cdktf.IResolvable): any {
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

export class VcsUnicastElectionMembersIpv6AddressCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsUnicastElectionMembersIpv6AddressCfgA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VcsUnicastElectionMembersIpv6AddressCfgA | cdktf.IResolvable | undefined) {
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

export class VcsUnicastElectionMembersIpv6AddressCfgAList extends cdktf.ComplexList {
  public internalValue? : VcsUnicastElectionMembersIpv6AddressCfgA[] | cdktf.IResolvable

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
  public get(index: number): VcsUnicastElectionMembersIpv6AddressCfgAOutputReference {
    return new VcsUnicastElectionMembersIpv6AddressCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members thunder_vcs_unicast_election_members}
*/
export class VcsUnicastElectionMembersA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_unicast_election_members";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsUnicastElectionMembersA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsUnicastElectionMembersA to import
  * @param importFromId The id of the existing VcsUnicastElectionMembersA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsUnicastElectionMembersA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_unicast_election_members", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vcs_unicast_election_members thunder_vcs_unicast_election_members} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsUnicastElectionMembersAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsUnicastElectionMembersAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_unicast_election_members',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._uuid = config.uuid;
    this._ipAddressCfg.internalValue = config.ipAddressCfg;
    this._ipv6AddressCfg.internalValue = config.ipv6AddressCfg;
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
  private _ipAddressCfg = new VcsUnicastElectionMembersIpAddressCfgAList(this, "ip_address_cfg", false);
  public get ipAddressCfg() {
    return this._ipAddressCfg;
  }
  public putIpAddressCfg(value: VcsUnicastElectionMembersIpAddressCfgA[] | cdktf.IResolvable) {
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
  private _ipv6AddressCfg = new VcsUnicastElectionMembersIpv6AddressCfgAList(this, "ipv6_address_cfg", false);
  public get ipv6AddressCfg() {
    return this._ipv6AddressCfg;
  }
  public putIpv6AddressCfg(value: VcsUnicastElectionMembersIpv6AddressCfgA[] | cdktf.IResolvable) {
    this._ipv6AddressCfg.internalValue = value;
  }
  public resetIpv6AddressCfg() {
    this._ipv6AddressCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCfgInput() {
    return this._ipv6AddressCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ip_address_cfg: cdktf.listMapper(vcsUnicastElectionMembersIpAddressCfgAToTerraform, true)(this._ipAddressCfg.internalValue),
      ipv6_address_cfg: cdktf.listMapper(vcsUnicastElectionMembersIpv6AddressCfgAToTerraform, true)(this._ipv6AddressCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_cfg: {
        value: cdktf.listMapperHcl(vcsUnicastElectionMembersIpAddressCfgAToHclTerraform, true)(this._ipAddressCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsUnicastElectionMembersIpAddressCfgAList",
      },
      ipv6_address_cfg: {
        value: cdktf.listMapperHcl(vcsUnicastElectionMembersIpv6AddressCfgAToHclTerraform, true)(this._ipv6AddressCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsUnicastElectionMembersIpv6AddressCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
