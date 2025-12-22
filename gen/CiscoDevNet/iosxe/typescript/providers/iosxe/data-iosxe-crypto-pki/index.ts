// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto_pki
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCryptoPkiConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto_pki#device DataIosxeCryptoPki#device}
  */
  readonly device?: string;
}
export interface DataIosxeCryptoPkiTrustpoints {
}

export function dataIosxeCryptoPkiTrustpointsToTerraform(struct?: DataIosxeCryptoPkiTrustpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeCryptoPkiTrustpointsToHclTerraform(struct?: DataIosxeCryptoPkiTrustpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeCryptoPkiTrustpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeCryptoPkiTrustpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeCryptoPkiTrustpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enrollment_mode_ra - computed: true, optional: false, required: false
  public get enrollmentModeRa() {
    return this.getBooleanAttribute('enrollment_mode_ra');
  }

  // enrollment_pkcs12 - computed: true, optional: false, required: false
  public get enrollmentPkcs12() {
    return this.getBooleanAttribute('enrollment_pkcs12');
  }

  // enrollment_selfsigned - computed: true, optional: false, required: false
  public get enrollmentSelfsigned() {
    return this.getBooleanAttribute('enrollment_selfsigned');
  }

  // enrollment_terminal - computed: true, optional: false, required: false
  public get enrollmentTerminal() {
    return this.getBooleanAttribute('enrollment_terminal');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // revocation_check - computed: true, optional: false, required: false
  public get revocationCheck() {
    return this.getListAttribute('revocation_check');
  }

  // rsakeypair - computed: true, optional: false, required: false
  public get rsakeypair() {
    return this.getStringAttribute('rsakeypair');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // subject_name - computed: true, optional: false, required: false
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class DataIosxeCryptoPkiTrustpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeCryptoPkiTrustpointsOutputReference {
    return new DataIosxeCryptoPkiTrustpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto_pki iosxe_crypto_pki}
*/
export class DataIosxeCryptoPki extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_pki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCryptoPki resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCryptoPki to import
  * @param importFromId The id of the existing DataIosxeCryptoPki that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto_pki#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCryptoPki to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_pki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto_pki iosxe_crypto_pki} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCryptoPkiConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCryptoPkiConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_pki',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // trustpoints - computed: true, optional: false, required: false
  private _trustpoints = new DataIosxeCryptoPkiTrustpointsList(this, "trustpoints", false);
  public get trustpoints() {
    return this._trustpoints;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
