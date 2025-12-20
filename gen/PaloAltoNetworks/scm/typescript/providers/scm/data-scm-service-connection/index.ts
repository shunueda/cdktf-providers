// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmServiceConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder in which the resource is defined
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection#folder DataScmServiceConnection#folder}
  */
  readonly folder?: string;
  /**
  * The UUID of the service connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection#id DataScmServiceConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the service connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection#name DataScmServiceConnection#name}
  */
  readonly name?: string;
}
export interface DataScmServiceConnectionBgpPeer {
}

export function dataScmServiceConnectionBgpPeerToTerraform(struct?: DataScmServiceConnectionBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceConnectionBgpPeerToHclTerraform(struct?: DataScmServiceConnectionBgpPeer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceConnectionBgpPeerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceConnectionBgpPeer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceConnectionBgpPeer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // local_ipv6_address - computed: true, optional: false, required: false
  public get localIpv6Address() {
    return this.getStringAttribute('local_ipv6_address');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // peer_ipv6_address - computed: true, optional: false, required: false
  public get peerIpv6Address() {
    return this.getStringAttribute('peer_ipv6_address');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}
export interface DataScmServiceConnectionProtocolBgp {
}

export function dataScmServiceConnectionProtocolBgpToTerraform(struct?: DataScmServiceConnectionProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceConnectionProtocolBgpToHclTerraform(struct?: DataScmServiceConnectionProtocolBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceConnectionProtocolBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceConnectionProtocolBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceConnectionProtocolBgp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // do_not_export_routes - computed: true, optional: false, required: false
  public get doNotExportRoutes() {
    return this.getBooleanAttribute('do_not_export_routes');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // fast_failover - computed: true, optional: false, required: false
  public get fastFailover() {
    return this.getBooleanAttribute('fast_failover');
  }

  // local_ip_address - computed: true, optional: false, required: false
  public get localIpAddress() {
    return this.getStringAttribute('local_ip_address');
  }

  // originate_default_route - computed: true, optional: false, required: false
  public get originateDefaultRoute() {
    return this.getBooleanAttribute('originate_default_route');
  }

  // peer_as - computed: true, optional: false, required: false
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }

  // peer_ip_address - computed: true, optional: false, required: false
  public get peerIpAddress() {
    return this.getStringAttribute('peer_ip_address');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // summarize_mobile_user_routes - computed: true, optional: false, required: false
  public get summarizeMobileUserRoutes() {
    return this.getBooleanAttribute('summarize_mobile_user_routes');
  }
}
export interface DataScmServiceConnectionProtocol {
}

export function dataScmServiceConnectionProtocolToTerraform(struct?: DataScmServiceConnectionProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceConnectionProtocolToHclTerraform(struct?: DataScmServiceConnectionProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceConnectionProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceConnectionProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceConnectionProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp - computed: true, optional: false, required: false
  private _bgp = new DataScmServiceConnectionProtocolBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
}
export interface DataScmServiceConnectionQos {
}

export function dataScmServiceConnectionQosToTerraform(struct?: DataScmServiceConnectionQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmServiceConnectionQosToHclTerraform(struct?: DataScmServiceConnectionQos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmServiceConnectionQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmServiceConnectionQos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmServiceConnectionQos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // qos_profile - computed: true, optional: false, required: false
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection scm_service_connection}
*/
export class DataScmServiceConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_service_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmServiceConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmServiceConnection to import
  * @param importFromId The id of the existing DataScmServiceConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmServiceConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_service_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/service_connection scm_service_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmServiceConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmServiceConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_service_connection',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folder = config.folder;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_sc - computed: true, optional: false, required: false
  public get backupSc() {
    return this.getStringAttribute('backup_sc');
  }

  // bgp_peer - computed: true, optional: false, required: false
  private _bgpPeer = new DataScmServiceConnectionBgpPeerOutputReference(this, "bgp_peer");
  public get bgpPeer() {
    return this._bgpPeer;
  }

  // encrypted_values - computed: true, optional: false, required: false
  private _encryptedValues = new cdktf.StringMap(this, "encrypted_values");
  public get encryptedValues() {
    return this._encryptedValues;
  }

  // folder - computed: true, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ipsec_tunnel - computed: true, optional: false, required: false
  public get ipsecTunnel() {
    return this.getStringAttribute('ipsec_tunnel');
  }

  // name - computed: true, optional: true, required: false
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

  // nat_pool - computed: true, optional: false, required: false
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }

  // no_export_community - computed: true, optional: false, required: false
  public get noExportCommunity() {
    return this.getStringAttribute('no_export_community');
  }

  // onboarding_type - computed: true, optional: false, required: false
  public get onboardingType() {
    return this.getStringAttribute('onboarding_type');
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataScmServiceConnectionProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }

  // qos - computed: true, optional: false, required: false
  private _qos = new DataScmServiceConnectionQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secondary_ipsec_tunnel - computed: true, optional: false, required: false
  public get secondaryIpsecTunnel() {
    return this.getStringAttribute('secondary_ipsec_tunnel');
  }

  // source_nat - computed: true, optional: false, required: false
  public get sourceNat() {
    return this.getBooleanAttribute('source_nat');
  }

  // subnets - computed: true, optional: false, required: false
  public get subnets() {
    return this.getListAttribute('subnets');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
