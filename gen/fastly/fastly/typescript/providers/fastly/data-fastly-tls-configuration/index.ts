// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFastlyTlsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Signifies whether Fastly will use this configuration as a default when creating a new TLS activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#default DataFastlyTlsConfiguration#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * HTTP protocols available on the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#http_protocols DataFastlyTlsConfiguration#http_protocols}
  */
  readonly httpProtocols?: string[];
  /**
  * ID of the TLS configuration obtained from the Fastly API or another data source. Conflicts with all the other filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#id DataFastlyTlsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Custom name of the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#name DataFastlyTlsConfiguration#name}
  */
  readonly name?: string;
  /**
  * TLS protocols available on the TLS configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#tls_protocols DataFastlyTlsConfiguration#tls_protocols}
  */
  readonly tlsProtocols?: string[];
  /**
  * Whether the configuration should support the `PLATFORM` or `CUSTOM` TLS service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#tls_service DataFastlyTlsConfiguration#tls_service}
  */
  readonly tlsService?: string;
}
export interface DataFastlyTlsConfigurationDnsRecords {
}

export function dataFastlyTlsConfigurationDnsRecordsToTerraform(struct?: DataFastlyTlsConfigurationDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFastlyTlsConfigurationDnsRecordsToHclTerraform(struct?: DataFastlyTlsConfigurationDnsRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFastlyTlsConfigurationDnsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFastlyTlsConfigurationDnsRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFastlyTlsConfigurationDnsRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // record_value - computed: true, optional: false, required: false
  public get recordValue() {
    return this.getStringAttribute('record_value');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

export class DataFastlyTlsConfigurationDnsRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataFastlyTlsConfigurationDnsRecordsOutputReference {
    return new DataFastlyTlsConfigurationDnsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration fastly_tls_configuration}
*/
export class DataFastlyTlsConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_tls_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFastlyTlsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFastlyTlsConfiguration to import
  * @param importFromId The id of the existing DataFastlyTlsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFastlyTlsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_tls_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/data-sources/tls_configuration fastly_tls_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFastlyTlsConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFastlyTlsConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fastly_tls_configuration',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0',
        providerVersionConstraint: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._httpProtocols = config.httpProtocols;
    this._id = config.id;
    this._name = config.name;
    this._tlsProtocols = config.tlsProtocols;
    this._tlsService = config.tlsService;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // dns_records - computed: true, optional: false, required: false
  private _dnsRecords = new DataFastlyTlsConfigurationDnsRecordsList(this, "dns_records", true);
  public get dnsRecords() {
    return this._dnsRecords;
  }

  // http_protocols - computed: true, optional: true, required: false
  private _httpProtocols?: string[]; 
  public get httpProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('http_protocols'));
  }
  public set httpProtocols(value: string[]) {
    this._httpProtocols = value;
  }
  public resetHttpProtocols() {
    this._httpProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolsInput() {
    return this._httpProtocols;
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

  // tls_protocols - computed: true, optional: true, required: false
  private _tlsProtocols?: string[]; 
  public get tlsProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_protocols'));
  }
  public set tlsProtocols(value: string[]) {
    this._tlsProtocols = value;
  }
  public resetTlsProtocols() {
    this._tlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolsInput() {
    return this._tlsProtocols;
  }

  // tls_service - computed: true, optional: true, required: false
  private _tlsService?: string; 
  public get tlsService() {
    return this.getStringAttribute('tls_service');
  }
  public set tlsService(value: string) {
    this._tlsService = value;
  }
  public resetTlsService() {
    this._tlsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServiceInput() {
    return this._tlsService;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      http_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpProtocols),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tls_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsProtocols),
      tls_service: cdktf.stringToTerraform(this._tlsService),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      tls_protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsProtocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tls_service: {
        value: cdktf.stringToHclTerraform(this._tlsService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
