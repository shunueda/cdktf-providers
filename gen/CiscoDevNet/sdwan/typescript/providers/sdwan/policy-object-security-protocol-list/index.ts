// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyObjectSecurityProtocolListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#description PolicyObjectSecurityProtocolList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#entries PolicyObjectSecurityProtocolList#entries}
  */
  readonly entries: PolicyObjectSecurityProtocolListEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#feature_profile_id PolicyObjectSecurityProtocolList#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Policy_object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#name PolicyObjectSecurityProtocolList#name}
  */
  readonly name: string;
}
export interface PolicyObjectSecurityProtocolListEntries {
  /**
  * 
  *   - Choices: `snmp`, `icmp`, `tcp`, `udp`, `echo`, `telnet`, `wins`, `n2h2server`, `nntp`, `pptp`, `rtsp`, `bootpc`, `gdoi`, `tacacs`, `gopher`, `icabrowser`, `skinny`, `sunrpc`, `biff`, `router`, `ircs`, `orasrv`, `ms-cluster-net`, `kermit`, `isakmp`, `sshell`, `realsecure`, `ircu`, `appleqtc`, `pwdgen`, `rdb-dbs-disp`, `creativepartnr`, `finger`, `ftps`, `giop`, `rsvd`, `hp-alarm-mgr`, `uucp`, `kerberos`, `imap`, `time`, `bootps`, `tftp`, `oracle`, `snmptrap`, `http`, `qmtp`, `radius`, `oracle-em-vp`, `tarantella`, `pcanywheredata`, `ldap`, `mgcp`, `sqlsrv`, `hsrp`, `cisco-net-mgmt`, `smtp`, `pcanywherestat`, `exec`, `send`, `stun`, `syslog`, `ms-sql-m`, `citrix`, `creativeserver`, `cifs`, `cisco-sys`, `cisco-tna`, `ms-dotnetster`, `gtpv1`, `gtpv0`, `imap3`, `fcip-port`, `netbios-dgm`, `sip-tls`, `pop3s`, `cisco-fna`, `802-11-iapp`, `oem-agent`, `cisco-tdp`, `tr-rsrb`, `r-winsock`, `sql-net`, `syslog-conn`, `tacacs-ds`, `h225ras`, `ace-svr`, `dhcp-failover`, `igmpv3lite`, `irc-serv`, `entrust-svcs`, `dbcontrol_agent`, `cisco-svcs`, `ipsec-msft`, `microsoft-ds`, `ms-sna`, `rsvp_tunnel`, `rsvp-encap`, `hp-collector`, `netbios-ns`, `msexch-routing`, `h323`, `l2tp`, `ldap-admin`, `pop3`, `h323callsigalt`, `ms-sql`, `iscsi-target`, `webster`, `lotusnote`, `ipx`, `entrust-svc-hand`, `citriximaclient`, `rtc-pm-port`, `ftp`, `aol`, `xdmcp`, `oraclenames`, `login`, `iscsi`, `ttc`, `imaps`, `socks`, `ssh`, `dnsix`, `daytime`, `sip`, `discard`, `ntp`, `ldaps`, `https`, `vdolive`, `ica`, `net8-cman`, `cuseeme`, `netstat`, `sms`, `streamworks`, `rtelnet`, `who`, `kazaa`, `ssp`, `dbase`, `timed`, `cddbp`, `telnets`, `ymsgr`, `ident`, `bgp`, `ddns-v3`, `vqp`, `irc`, `ipass`, `x11`, `dns`, `lotusmtap`, `mysql`, `nfs`, `msnmsgr`, `netshow`, `sqlserv`, `hp-managed-node`, `ncp`, `shell`, `realmedia`, `msrpc`, `clp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#protocol_name PolicyObjectSecurityProtocolList#protocol_name}
  */
  readonly protocolName?: string;
}

export function policyObjectSecurityProtocolListEntriesToTerraform(struct?: PolicyObjectSecurityProtocolListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_name: cdktf.stringToTerraform(struct!.protocolName),
  }
}


export function policyObjectSecurityProtocolListEntriesToHclTerraform(struct?: PolicyObjectSecurityProtocolListEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_name: {
      value: cdktf.stringToHclTerraform(struct!.protocolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyObjectSecurityProtocolListEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyObjectSecurityProtocolListEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolName = this._protocolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyObjectSecurityProtocolListEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolName = value.protocolName;
    }
  }

  // protocol_name - computed: false, optional: true, required: false
  private _protocolName?: string; 
  public get protocolName() {
    return this.getStringAttribute('protocol_name');
  }
  public set protocolName(value: string) {
    this._protocolName = value;
  }
  public resetProtocolName() {
    this._protocolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNameInput() {
    return this._protocolName;
  }
}

export class PolicyObjectSecurityProtocolListEntriesList extends cdktf.ComplexList {
  public internalValue? : PolicyObjectSecurityProtocolListEntries[] | cdktf.IResolvable

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
  public get(index: number): PolicyObjectSecurityProtocolListEntriesOutputReference {
    return new PolicyObjectSecurityProtocolListEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list sdwan_policy_object_security_protocol_list}
*/
export class PolicyObjectSecurityProtocolList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_policy_object_security_protocol_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyObjectSecurityProtocolList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyObjectSecurityProtocolList to import
  * @param importFromId The id of the existing PolicyObjectSecurityProtocolList that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyObjectSecurityProtocolList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_policy_object_security_protocol_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/policy_object_security_protocol_list sdwan_policy_object_security_protocol_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyObjectSecurityProtocolListConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyObjectSecurityProtocolListConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_policy_object_security_protocol_list',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
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

  // entries - computed: false, optional: false, required: true
  private _entries = new PolicyObjectSecurityProtocolListEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: PolicyObjectSecurityProtocolListEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(policyObjectSecurityProtocolListEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
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
      entries: {
        value: cdktf.listMapperHcl(policyObjectSecurityProtocolListEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyObjectSecurityProtocolListEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
