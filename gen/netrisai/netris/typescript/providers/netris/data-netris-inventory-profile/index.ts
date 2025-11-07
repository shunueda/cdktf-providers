// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetrisInventoryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Inventory profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#description DataNetrisInventoryProfile#description}
  */
  readonly description?: string;
  /**
  * List of IP addresses of DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#dnsservers DataNetrisInventoryProfile#dnsservers}
  */
  readonly dnsservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#id DataNetrisInventoryProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of IPv4 subnets allowed to ssh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#ipv4ssh DataNetrisInventoryProfile#ipv4ssh}
  */
  readonly ipv4Ssh?: string[];
  /**
  * List of IPv6 subnets allowed to ssh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#ipv6ssh DataNetrisInventoryProfile#ipv6ssh}
  */
  readonly ipv6Ssh?: string[];
  /**
  * The name of inventory profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#name DataNetrisInventoryProfile#name}
  */
  readonly name: string;
  /**
  * List of domain names or IP addresses of NTP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#ntpservers DataNetrisInventoryProfile#ntpservers}
  */
  readonly ntpservers?: string[];
  /**
  * Devices using this inventory profile will adjust their system time to the selected timezone. Valid value is a name from the TZ [database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#timezone DataNetrisInventoryProfile#timezone}
  */
  readonly timezone?: string;
  /**
  * customrule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#customrule DataNetrisInventoryProfile#customrule}
  */
  readonly customrule?: DataNetrisInventoryProfileCustomrule[] | cdktf.IResolvable;
}
export interface DataNetrisInventoryProfileCustomrule {
  /**
  * Custom rule's description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#description DataNetrisInventoryProfile#description}
  */
  readonly description?: string;
  /**
  * Destination port. 1-65535, or empty for any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#dstport DataNetrisInventoryProfile#dstport}
  */
  readonly dstport: string;
  /**
  * Protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#protocol DataNetrisInventoryProfile#protocol}
  */
  readonly protocol: string;
  /**
  * Source Subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#sourcesubnet DataNetrisInventoryProfile#sourcesubnet}
  */
  readonly sourcesubnet: string;
  /**
  * Source port. 1-65535, or empty for any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#srcport DataNetrisInventoryProfile#srcport}
  */
  readonly srcport: string;
}

export function dataNetrisInventoryProfileCustomruleToTerraform(struct?: DataNetrisInventoryProfileCustomrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dstport: cdktf.stringToTerraform(struct!.dstport),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sourcesubnet: cdktf.stringToTerraform(struct!.sourcesubnet),
    srcport: cdktf.stringToTerraform(struct!.srcport),
  }
}


export function dataNetrisInventoryProfileCustomruleToHclTerraform(struct?: DataNetrisInventoryProfileCustomrule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dstport: {
      value: cdktf.stringToHclTerraform(struct!.dstport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sourcesubnet: {
      value: cdktf.stringToHclTerraform(struct!.sourcesubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srcport: {
      value: cdktf.stringToHclTerraform(struct!.srcport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNetrisInventoryProfileCustomruleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetrisInventoryProfileCustomrule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dstport !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstport = this._dstport;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourcesubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcesubnet = this._sourcesubnet;
    }
    if (this._srcport !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcport = this._srcport;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetrisInventoryProfileCustomrule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dstport = undefined;
      this._protocol = undefined;
      this._sourcesubnet = undefined;
      this._srcport = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dstport = value.dstport;
      this._protocol = value.protocol;
      this._sourcesubnet = value.sourcesubnet;
      this._srcport = value.srcport;
    }
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

  // dstport - computed: false, optional: false, required: true
  private _dstport?: string; 
  public get dstport() {
    return this.getStringAttribute('dstport');
  }
  public set dstport(value: string) {
    this._dstport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstportInput() {
    return this._dstport;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sourcesubnet - computed: false, optional: false, required: true
  private _sourcesubnet?: string; 
  public get sourcesubnet() {
    return this.getStringAttribute('sourcesubnet');
  }
  public set sourcesubnet(value: string) {
    this._sourcesubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesubnetInput() {
    return this._sourcesubnet;
  }

  // srcport - computed: false, optional: false, required: true
  private _srcport?: string; 
  public get srcport() {
    return this.getStringAttribute('srcport');
  }
  public set srcport(value: string) {
    this._srcport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcportInput() {
    return this._srcport;
  }
}

export class DataNetrisInventoryProfileCustomruleList extends cdktf.ComplexList {
  public internalValue? : DataNetrisInventoryProfileCustomrule[] | cdktf.IResolvable

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
  public get(index: number): DataNetrisInventoryProfileCustomruleOutputReference {
    return new DataNetrisInventoryProfileCustomruleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile netris_inventory_profile}
*/
export class DataNetrisInventoryProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_inventory_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetrisInventoryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetrisInventoryProfile to import
  * @param importFromId The id of the existing DataNetrisInventoryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetrisInventoryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_inventory_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/inventory_profile netris_inventory_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetrisInventoryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetrisInventoryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_inventory_profile',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
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
    this._dnsservers = config.dnsservers;
    this._id = config.id;
    this._ipv4Ssh = config.ipv4Ssh;
    this._ipv6Ssh = config.ipv6Ssh;
    this._name = config.name;
    this._ntpservers = config.ntpservers;
    this._timezone = config.timezone;
    this._customrule.internalValue = config.customrule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // dnsservers - computed: false, optional: true, required: false
  private _dnsservers?: string[]; 
  public get dnsservers() {
    return this.getListAttribute('dnsservers');
  }
  public set dnsservers(value: string[]) {
    this._dnsservers = value;
  }
  public resetDnsservers() {
    this._dnsservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsserversInput() {
    return this._dnsservers;
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

  // ipv4ssh - computed: false, optional: true, required: false
  private _ipv4Ssh?: string[]; 
  public get ipv4Ssh() {
    return this.getListAttribute('ipv4ssh');
  }
  public set ipv4Ssh(value: string[]) {
    this._ipv4Ssh = value;
  }
  public resetIpv4Ssh() {
    this._ipv4Ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SshInput() {
    return this._ipv4Ssh;
  }

  // ipv6ssh - computed: false, optional: true, required: false
  private _ipv6Ssh?: string[]; 
  public get ipv6Ssh() {
    return this.getListAttribute('ipv6ssh');
  }
  public set ipv6Ssh(value: string[]) {
    this._ipv6Ssh = value;
  }
  public resetIpv6Ssh() {
    this._ipv6Ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SshInput() {
    return this._ipv6Ssh;
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

  // ntpservers - computed: false, optional: true, required: false
  private _ntpservers?: string[]; 
  public get ntpservers() {
    return this.getListAttribute('ntpservers');
  }
  public set ntpservers(value: string[]) {
    this._ntpservers = value;
  }
  public resetNtpservers() {
    this._ntpservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpserversInput() {
    return this._ntpservers;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // customrule - computed: false, optional: true, required: false
  private _customrule = new DataNetrisInventoryProfileCustomruleList(this, "customrule", false);
  public get customrule() {
    return this._customrule;
  }
  public putCustomrule(value: DataNetrisInventoryProfileCustomrule[] | cdktf.IResolvable) {
    this._customrule.internalValue = value;
  }
  public resetCustomrule() {
    this._customrule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customruleInput() {
    return this._customrule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dnsservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsservers),
      id: cdktf.stringToTerraform(this._id),
      ipv4ssh: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Ssh),
      ipv6ssh: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Ssh),
      name: cdktf.stringToTerraform(this._name),
      ntpservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ntpservers),
      timezone: cdktf.stringToTerraform(this._timezone),
      customrule: cdktf.listMapper(dataNetrisInventoryProfileCustomruleToTerraform, true)(this._customrule.internalValue),
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
      dnsservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsservers),
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
      ipv4ssh: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Ssh),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6ssh: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Ssh),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ntpservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ntpservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customrule: {
        value: cdktf.listMapperHcl(dataNetrisInventoryProfileCustomruleToHclTerraform, true)(this._customrule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNetrisInventoryProfileCustomruleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
