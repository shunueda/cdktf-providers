// https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataExoscaleElasticIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Elastic IP (EIP) ID to match (conflicts with `ip_address` and `labels`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip#id DataExoscaleElasticIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The EIP IPv4 or IPv6 address to match (conflicts with `id` and `labels`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip#ip_address DataExoscaleElasticIp#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The EIP labels to match (conflicts with `ip_address` and `id`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip#labels DataExoscaleElasticIp#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Exocale [Zone](https://www.exoscale.com/datacenters/) name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip#zone DataExoscaleElasticIp#zone}
  */
  readonly zone: string;
}
export interface DataExoscaleElasticIpHealthcheck {
}

export function dataExoscaleElasticIpHealthcheckToTerraform(struct?: DataExoscaleElasticIpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataExoscaleElasticIpHealthcheckToHclTerraform(struct?: DataExoscaleElasticIpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataExoscaleElasticIpHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataExoscaleElasticIpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataExoscaleElasticIpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // strikes_fail - computed: true, optional: false, required: false
  public get strikesFail() {
    return this.getNumberAttribute('strikes_fail');
  }

  // strikes_ok - computed: true, optional: false, required: false
  public get strikesOk() {
    return this.getNumberAttribute('strikes_ok');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tls_skip_verify - computed: true, optional: false, required: false
  public get tlsSkipVerify() {
    return this.getBooleanAttribute('tls_skip_verify');
  }

  // tls_sni - computed: true, optional: false, required: false
  public get tlsSni() {
    return this.getStringAttribute('tls_sni');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataExoscaleElasticIpHealthcheckList extends cdktf.ComplexList {

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
  public get(index: number): DataExoscaleElasticIpHealthcheckOutputReference {
    return new DataExoscaleElasticIpHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip exoscale_elastic_ip}
*/
export class DataExoscaleElasticIp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "exoscale_elastic_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataExoscaleElasticIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataExoscaleElasticIp to import
  * @param importFromId The id of the existing DataExoscaleElasticIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataExoscaleElasticIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "exoscale_elastic_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/exoscale/exoscale/0.66.0/docs/data-sources/elastic_ip exoscale_elastic_ip} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataExoscaleElasticIpConfig
  */
  public constructor(scope: Construct, id: string, config: DataExoscaleElasticIpConfig) {
    super(scope, id, {
      terraformResourceType: 'exoscale_elastic_ip',
      terraformGeneratorMetadata: {
        providerName: 'exoscale',
        providerVersion: '0.66.0'
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
    this._ipAddress = config.ipAddress;
    this._labels = config.labels;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // healthcheck - computed: true, optional: false, required: false
  private _healthcheck = new DataExoscaleElasticIpHealthcheckList(this, "healthcheck", false);
  public get healthcheck() {
    return this._healthcheck;
  }

  // id - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
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
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      zone: cdktf.stringToTerraform(this._zone),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
