// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallTlsInspectCaCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#ca_cert_id DataAlicloudCloudFirewallTlsInspectCaCertificates#ca_cert_id}
  */
  readonly caCertId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#id DataAlicloudCloudFirewallTlsInspectCaCertificates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#ids DataAlicloudCloudFirewallTlsInspectCaCertificates#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#output_file DataAlicloudCloudFirewallTlsInspectCaCertificates#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#page_number DataAlicloudCloudFirewallTlsInspectCaCertificates#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#page_size DataAlicloudCloudFirewallTlsInspectCaCertificates#page_size}
  */
  readonly pageSize?: number;
}
export interface DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificates {
}

export function dataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesToTerraform(struct?: DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesToHclTerraform(struct?: DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert_id - computed: true, optional: false, required: false
  public get caCertId() {
    return this.getStringAttribute('ca_cert_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesOutputReference {
    return new DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates alicloud_cloud_firewall_tls_inspect_ca_certificates}
*/
export class DataAlicloudCloudFirewallTlsInspectCaCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_tls_inspect_ca_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallTlsInspectCaCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallTlsInspectCaCertificates to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallTlsInspectCaCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallTlsInspectCaCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_tls_inspect_ca_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_firewall_tls_inspect_ca_certificates alicloud_cloud_firewall_tls_inspect_ca_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallTlsInspectCaCertificatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallTlsInspectCaCertificatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_tls_inspect_ca_certificates',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caCertId = config.caCertId;
    this._id = config.id;
    this._ids = config.ids;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_cert_id - computed: false, optional: true, required: false
  private _caCertId?: string; 
  public get caCertId() {
    return this.getStringAttribute('ca_cert_id');
  }
  public set caCertId(value: string) {
    this._caCertId = value;
  }
  public resetCaCertId() {
    this._caCertId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertIdInput() {
    return this._caCertId;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataAlicloudCloudFirewallTlsInspectCaCertificatesCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_cert_id: cdktf.stringToTerraform(this._caCertId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_cert_id: {
        value: cdktf.stringToHclTerraform(this._caCertId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
