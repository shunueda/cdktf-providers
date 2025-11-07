// https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NgceClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#add_apps NgceCluster#add_apps}
  */
  readonly addApps: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#apps_subnet NgceCluster#apps_subnet}
  */
  readonly appsSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#apps_subnet_mask NgceCluster#apps_subnet_mask}
  */
  readonly appsSubnetMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#dns_server_ips NgceCluster#dns_server_ips}
  */
  readonly dnsServerIps: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#domain_names NgceCluster#domain_names}
  */
  readonly domainNames: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#hostname NgceCluster#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#id NgceCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#metadata_fault_tolerance NgceCluster#metadata_fault_tolerance}
  */
  readonly metadataFaultTolerance: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#name NgceCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#node_ips NgceCluster#node_ips}
  */
  readonly nodeIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#ntp_servers NgceCluster#ntp_servers}
  */
  readonly ntpServers: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#subnet_gateway NgceCluster#subnet_gateway}
  */
  readonly subnetGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#subnet_mask NgceCluster#subnet_mask}
  */
  readonly subnetMask: string;
}
export interface NgceClusterNodeIpMap {
}

export function ngceClusterNodeIpMapToTerraform(struct?: NgceClusterNodeIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ngceClusterNodeIpMapToHclTerraform(struct?: NgceClusterNodeIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NgceClusterNodeIpMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NgceClusterNodeIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NgceClusterNodeIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }

  // node_ips - computed: true, optional: false, required: false
  public get nodeIps() {
    return this.getListAttribute('node_ips');
  }
}

export class NgceClusterNodeIpMapList extends cdktf.ComplexList {

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
  public get(index: number): NgceClusterNodeIpMapOutputReference {
    return new NgceClusterNodeIpMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster cohesity_ngce_cluster}
*/
export class NgceCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesity_ngce_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NgceCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NgceCluster to import
  * @param importFromId The id of the existing NgceCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NgceCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesity_ngce_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesity/cohesity/2.1.3/docs/resources/ngce_cluster cohesity_ngce_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NgceClusterConfig
  */
  public constructor(scope: Construct, id: string, config: NgceClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesity_ngce_cluster',
      terraformGeneratorMetadata: {
        providerName: 'cohesity',
        providerVersion: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addApps = config.addApps;
    this._appsSubnet = config.appsSubnet;
    this._appsSubnetMask = config.appsSubnetMask;
    this._dnsServerIps = config.dnsServerIps;
    this._domainNames = config.domainNames;
    this._hostname = config.hostname;
    this._id = config.id;
    this._metadataFaultTolerance = config.metadataFaultTolerance;
    this._name = config.name;
    this._nodeIps = config.nodeIps;
    this._ntpServers = config.ntpServers;
    this._subnetGateway = config.subnetGateway;
    this._subnetMask = config.subnetMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_apps - computed: false, optional: false, required: true
  private _addApps?: boolean | cdktf.IResolvable; 
  public get addApps() {
    return this.getBooleanAttribute('add_apps');
  }
  public set addApps(value: boolean | cdktf.IResolvable) {
    this._addApps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addAppsInput() {
    return this._addApps;
  }

  // apps_subnet - computed: false, optional: true, required: false
  private _appsSubnet?: string; 
  public get appsSubnet() {
    return this.getStringAttribute('apps_subnet');
  }
  public set appsSubnet(value: string) {
    this._appsSubnet = value;
  }
  public resetAppsSubnet() {
    this._appsSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsSubnetInput() {
    return this._appsSubnet;
  }

  // apps_subnet_mask - computed: false, optional: true, required: false
  private _appsSubnetMask?: string; 
  public get appsSubnetMask() {
    return this.getStringAttribute('apps_subnet_mask');
  }
  public set appsSubnetMask(value: string) {
    this._appsSubnetMask = value;
  }
  public resetAppsSubnetMask() {
    this._appsSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsSubnetMaskInput() {
    return this._appsSubnetMask;
  }

  // dns_server_ips - computed: false, optional: false, required: true
  private _dnsServerIps?: string; 
  public get dnsServerIps() {
    return this.getStringAttribute('dns_server_ips');
  }
  public set dnsServerIps(value: string) {
    this._dnsServerIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerIpsInput() {
    return this._dnsServerIps;
  }

  // domain_names - computed: false, optional: false, required: true
  private _domainNames?: string; 
  public get domainNames() {
    return this.getStringAttribute('domain_names');
  }
  public set domainNames(value: string) {
    this._domainNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // metadata_fault_tolerance - computed: false, optional: false, required: true
  private _metadataFaultTolerance?: number; 
  public get metadataFaultTolerance() {
    return this.getNumberAttribute('metadata_fault_tolerance');
  }
  public set metadataFaultTolerance(value: number) {
    this._metadataFaultTolerance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFaultToleranceInput() {
    return this._metadataFaultTolerance;
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

  // node_ip_map - computed: true, optional: false, required: false
  private _nodeIpMap = new NgceClusterNodeIpMapList(this, "node_ip_map", false);
  public get nodeIpMap() {
    return this._nodeIpMap;
  }

  // node_ips - computed: false, optional: false, required: true
  private _nodeIps?: string[]; 
  public get nodeIps() {
    return this.getListAttribute('node_ips');
  }
  public set nodeIps(value: string[]) {
    this._nodeIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpsInput() {
    return this._nodeIps;
  }

  // ntp_servers - computed: false, optional: false, required: true
  private _ntpServers?: string; 
  public get ntpServers() {
    return this.getStringAttribute('ntp_servers');
  }
  public set ntpServers(value: string) {
    this._ntpServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }

  // subnet_gateway - computed: false, optional: false, required: true
  private _subnetGateway?: string; 
  public get subnetGateway() {
    return this.getStringAttribute('subnet_gateway');
  }
  public set subnetGateway(value: string) {
    this._subnetGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGatewayInput() {
    return this._subnetGateway;
  }

  // subnet_mask - computed: false, optional: false, required: true
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_apps: cdktf.booleanToTerraform(this._addApps),
      apps_subnet: cdktf.stringToTerraform(this._appsSubnet),
      apps_subnet_mask: cdktf.stringToTerraform(this._appsSubnetMask),
      dns_server_ips: cdktf.stringToTerraform(this._dnsServerIps),
      domain_names: cdktf.stringToTerraform(this._domainNames),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      metadata_fault_tolerance: cdktf.numberToTerraform(this._metadataFaultTolerance),
      name: cdktf.stringToTerraform(this._name),
      node_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeIps),
      ntp_servers: cdktf.stringToTerraform(this._ntpServers),
      subnet_gateway: cdktf.stringToTerraform(this._subnetGateway),
      subnet_mask: cdktf.stringToTerraform(this._subnetMask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_apps: {
        value: cdktf.booleanToHclTerraform(this._addApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apps_subnet: {
        value: cdktf.stringToHclTerraform(this._appsSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apps_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._appsSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_ips: {
        value: cdktf.stringToHclTerraform(this._dnsServerIps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_names: {
        value: cdktf.stringToHclTerraform(this._domainNames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      metadata_fault_tolerance: {
        value: cdktf.numberToHclTerraform(this._metadataFaultTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ntp_servers: {
        value: cdktf.stringToHclTerraform(this._ntpServers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_gateway: {
        value: cdktf.stringToHclTerraform(this._subnetGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_mask: {
        value: cdktf.stringToHclTerraform(this._subnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
