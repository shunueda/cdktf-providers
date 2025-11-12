// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNs1ZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#additional_ports DataNs1Zone#additional_ports}
  */
  readonly additionalPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#additional_primaries DataNs1Zone#additional_primaries}
  */
  readonly additionalPrimaries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#id DataNs1Zone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#primary_network DataNs1Zone#primary_network}
  */
  readonly primaryNetwork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#primary_port DataNs1Zone#primary_port}
  */
  readonly primaryPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#zone DataNs1Zone#zone}
  */
  readonly zone: string;
}
export interface DataNs1ZoneSecondaries {
}

export function dataNs1ZoneSecondariesToTerraform(struct?: DataNs1ZoneSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNs1ZoneSecondariesToHclTerraform(struct?: DataNs1ZoneSecondaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNs1ZoneSecondariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNs1ZoneSecondaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNs1ZoneSecondaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('networks')));
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getBooleanAttribute('notify');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataNs1ZoneSecondariesList extends cdktf.ComplexList {

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
  public get(index: number): DataNs1ZoneSecondariesOutputReference {
    return new DataNs1ZoneSecondariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone ns1_zone}
*/
export class DataNs1Zone extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNs1Zone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNs1Zone to import
  * @param importFromId The id of the existing DataNs1Zone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNs1Zone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs/data-sources/zone ns1_zone} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNs1ZoneConfig
  */
  public constructor(scope: Construct, id: string, config: DataNs1ZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'ns1_zone',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalPorts = config.additionalPorts;
    this._additionalPrimaries = config.additionalPrimaries;
    this._id = config.id;
    this._primaryNetwork = config.primaryNetwork;
    this._primaryPort = config.primaryPort;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_ports - computed: false, optional: true, required: false
  private _additionalPorts?: number[]; 
  public get additionalPorts() {
    return this.getNumberListAttribute('additional_ports');
  }
  public set additionalPorts(value: number[]) {
    this._additionalPorts = value;
  }
  public resetAdditionalPorts() {
    this._additionalPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPortsInput() {
    return this._additionalPorts;
  }

  // additional_primaries - computed: false, optional: true, required: false
  private _additionalPrimaries?: string[]; 
  public get additionalPrimaries() {
    return this.getListAttribute('additional_primaries');
  }
  public set additionalPrimaries(value: string[]) {
    this._additionalPrimaries = value;
  }
  public resetAdditionalPrimaries() {
    this._additionalPrimaries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPrimariesInput() {
    return this._additionalPrimaries;
  }

  // dns_servers - computed: true, optional: false, required: false
  public get dnsServers() {
    return this.getStringAttribute('dns_servers');
  }

  // dnssec - computed: true, optional: false, required: false
  public get dnssec() {
    return this.getBooleanAttribute('dnssec');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }

  // hostmaster - computed: true, optional: false, required: false
  public get hostmaster() {
    return this.getStringAttribute('hostmaster');
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

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // networks - computed: true, optional: false, required: false
  public get networks() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('networks')));
  }

  // nx_ttl - computed: true, optional: false, required: false
  public get nxTtl() {
    return this.getNumberAttribute('nx_ttl');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getStringAttribute('primary');
  }

  // primary_network - computed: false, optional: true, required: false
  private _primaryNetwork?: number; 
  public get primaryNetwork() {
    return this.getNumberAttribute('primary_network');
  }
  public set primaryNetwork(value: number) {
    this._primaryNetwork = value;
  }
  public resetPrimaryNetwork() {
    this._primaryNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInput() {
    return this._primaryNetwork;
  }

  // primary_port - computed: false, optional: true, required: false
  private _primaryPort?: number; 
  public get primaryPort() {
    return this.getNumberAttribute('primary_port');
  }
  public set primaryPort(value: number) {
    this._primaryPort = value;
  }
  public resetPrimaryPort() {
    this._primaryPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryPortInput() {
    return this._primaryPort;
  }

  // refresh - computed: true, optional: false, required: false
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // secondaries - computed: true, optional: false, required: false
  private _secondaries = new DataNs1ZoneSecondariesList(this, "secondaries", true);
  public get secondaries() {
    return this._secondaries;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._additionalPorts),
      additional_primaries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalPrimaries),
      id: cdktf.stringToTerraform(this._id),
      primary_network: cdktf.numberToTerraform(this._primaryNetwork),
      primary_port: cdktf.numberToTerraform(this._primaryPort),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._additionalPorts),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      additional_primaries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalPrimaries),
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
      primary_network: {
        value: cdktf.numberToHclTerraform(this._primaryNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_port: {
        value: cdktf.numberToHclTerraform(this._primaryPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
