// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZenlayercloudZgaCertificatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * IDs of the certificates to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#certificate_ids DataZenlayercloudZgaCertificates#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Label of the certificate to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#certificate_label DataZenlayercloudZgaCertificates#certificate_label}
  */
  readonly certificateLabel?: string;
  /**
  * DNS Name of the certificate to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#dns_name DataZenlayercloudZgaCertificates#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Whether the certificate has expired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#expired DataZenlayercloudZgaCertificates#expired}
  */
  readonly expired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#id DataZenlayercloudZgaCertificates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of resource group that the certificate grouped by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#resource_group_id DataZenlayercloudZgaCertificates#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#result_output_file DataZenlayercloudZgaCertificates#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataZenlayercloudZgaCertificatesCertificates {
}

export function dataZenlayercloudZgaCertificatesCertificatesToTerraform(struct?: DataZenlayercloudZgaCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZenlayercloudZgaCertificatesCertificatesToHclTerraform(struct?: DataZenlayercloudZgaCertificatesCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZenlayercloudZgaCertificatesCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZenlayercloudZgaCertificatesCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZenlayercloudZgaCertificatesCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // certificate_label - computed: true, optional: false, required: false
  public get certificateLabel() {
    return this.getStringAttribute('certificate_label');
  }

  // common - computed: true, optional: false, required: false
  public get common() {
    return this.getStringAttribute('common');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_names'));
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataZenlayercloudZgaCertificatesCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): DataZenlayercloudZgaCertificatesCertificatesOutputReference {
    return new DataZenlayercloudZgaCertificatesCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates zenlayercloud_zga_certificates}
*/
export class DataZenlayercloudZgaCertificates extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zga_certificates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZenlayercloudZgaCertificates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZenlayercloudZgaCertificates to import
  * @param importFromId The id of the existing DataZenlayercloudZgaCertificates that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZenlayercloudZgaCertificates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zga_certificates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.12/docs/data-sources/zga_certificates zenlayercloud_zga_certificates} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZenlayercloudZgaCertificatesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZenlayercloudZgaCertificatesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zga_certificates',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateIds = config.certificateIds;
    this._certificateLabel = config.certificateLabel;
    this._dnsName = config.dnsName;
    this._expired = config.expired;
    this._id = config.id;
    this._resourceGroupId = config.resourceGroupId;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // certificate_label - computed: false, optional: true, required: false
  private _certificateLabel?: string; 
  public get certificateLabel() {
    return this.getStringAttribute('certificate_label');
  }
  public set certificateLabel(value: string) {
    this._certificateLabel = value;
  }
  public resetCertificateLabel() {
    this._certificateLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateLabelInput() {
    return this._certificateLabel;
  }

  // certificates - computed: true, optional: false, required: false
  private _certificates = new DataZenlayercloudZgaCertificatesCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // expired - computed: false, optional: true, required: false
  private _expired?: boolean | cdktf.IResolvable; 
  public get expired() {
    return this.getBooleanAttribute('expired');
  }
  public set expired(value: boolean | cdktf.IResolvable) {
    this._expired = value;
  }
  public resetExpired() {
    this._expired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredInput() {
    return this._expired;
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

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateIds),
      certificate_label: cdktf.stringToTerraform(this._certificateLabel),
      dns_name: cdktf.stringToTerraform(this._dnsName),
      expired: cdktf.booleanToTerraform(this._expired),
      id: cdktf.stringToTerraform(this._id),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      certificate_label: {
        value: cdktf.stringToHclTerraform(this._certificateLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expired: {
        value: cdktf.booleanToHclTerraform(this._expired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
