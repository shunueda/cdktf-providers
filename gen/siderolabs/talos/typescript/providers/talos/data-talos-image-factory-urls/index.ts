// https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTalosImageFactoryUrlsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The platform architecture for which the URLs are generated. Defaults to amd64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#architecture DataTalosImageFactoryUrls#architecture}
  */
  readonly architecture?: string;
  /**
  * 
  * The platform for which the URLs are generated.
  * 
  * 	#### Metal
  * 
  * 		- metal
  * 
  *     #### Cloud Platforms
  *         - aws
  *         - gcp
  *         - equinixMetal
  *         - azure
  *         - digital-ocean
  *         - nocloud
  *         - openstack
  *         - vmware
  *         - akamai
  *         - cloudstack
  *         - hcloud
  *         - oracle
  *         - upcloud
  *         - vultr
  *         - exoscale
  *         - opennebula
  *         - scaleway
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#platform DataTalosImageFactoryUrls#platform}
  */
  readonly platform?: string;
  /**
  * 
  * The SBC's (Single Board Copmuters) for which the url are generated.
  * 
  *     #### Single Board Computers
  *         - rpi_generic
  *         - revpi_generic
  *         - bananapi_m64
  *         - nanopi_r4s
  *         - nanopi_r5s
  *         - jetson_nano
  *         - libretech_all_h3_cc_h5
  *         - orangepi_r1_plus_lts
  *         - pine64
  *         - rock64
  *         - rock4cplus
  *         - rock4se
  *         - rock5a
  *         - rock5b
  *         - rockpi_4
  *         - rockpi_4c
  *         - helios64
  *         - turingrk1
  *         - orangepi-5
  *         - orangepi-5-plus
  *         - rockpro64
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#sbc DataTalosImageFactoryUrls#sbc}
  */
  readonly sbc?: string;
  /**
  * The schematic ID for which the URLs are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#schematic_id DataTalosImageFactoryUrls#schematic_id}
  */
  readonly schematicId: string;
  /**
  * The Talos version for which the URLs are generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#talos_version DataTalosImageFactoryUrls#talos_version}
  */
  readonly talosVersion: string;
}
export interface DataTalosImageFactoryUrlsUrls {
}

export function dataTalosImageFactoryUrlsUrlsToTerraform(struct?: DataTalosImageFactoryUrlsUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTalosImageFactoryUrlsUrlsToHclTerraform(struct?: DataTalosImageFactoryUrlsUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTalosImageFactoryUrlsUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTalosImageFactoryUrlsUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTalosImageFactoryUrlsUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disk_image - computed: true, optional: false, required: false
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }

  // disk_image_secureboot - computed: true, optional: false, required: false
  public get diskImageSecureboot() {
    return this.getStringAttribute('disk_image_secureboot');
  }

  // initramfs - computed: true, optional: false, required: false
  public get initramfs() {
    return this.getStringAttribute('initramfs');
  }

  // installer - computed: true, optional: false, required: false
  public get installer() {
    return this.getStringAttribute('installer');
  }

  // installer_secureboot - computed: true, optional: false, required: false
  public get installerSecureboot() {
    return this.getStringAttribute('installer_secureboot');
  }

  // iso - computed: true, optional: false, required: false
  public get iso() {
    return this.getStringAttribute('iso');
  }

  // iso_secureboot - computed: true, optional: false, required: false
  public get isoSecureboot() {
    return this.getStringAttribute('iso_secureboot');
  }

  // kernel - computed: true, optional: false, required: false
  public get kernel() {
    return this.getStringAttribute('kernel');
  }

  // kernel_command_line - computed: true, optional: false, required: false
  public get kernelCommandLine() {
    return this.getStringAttribute('kernel_command_line');
  }

  // pxe - computed: true, optional: false, required: false
  public get pxe() {
    return this.getStringAttribute('pxe');
  }

  // uki - computed: true, optional: false, required: false
  public get uki() {
    return this.getStringAttribute('uki');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls talos_image_factory_urls}
*/
export class DataTalosImageFactoryUrls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "talos_image_factory_urls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTalosImageFactoryUrls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTalosImageFactoryUrls to import
  * @param importFromId The id of the existing DataTalosImageFactoryUrls that should be imported. Refer to the {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTalosImageFactoryUrls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "talos_image_factory_urls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/siderolabs/talos/0.9.0/docs/data-sources/image_factory_urls talos_image_factory_urls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTalosImageFactoryUrlsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTalosImageFactoryUrlsConfig) {
    super(scope, id, {
      terraformResourceType: 'talos_image_factory_urls',
      terraformGeneratorMetadata: {
        providerName: 'talos',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architecture = config.architecture;
    this._platform = config.platform;
    this._sbc = config.sbc;
    this._schematicId = config.schematicId;
    this._talosVersion = config.talosVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // sbc - computed: false, optional: true, required: false
  private _sbc?: string; 
  public get sbc() {
    return this.getStringAttribute('sbc');
  }
  public set sbc(value: string) {
    this._sbc = value;
  }
  public resetSbc() {
    this._sbc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbcInput() {
    return this._sbc;
  }

  // schematic_id - computed: false, optional: false, required: true
  private _schematicId?: string; 
  public get schematicId() {
    return this.getStringAttribute('schematic_id');
  }
  public set schematicId(value: string) {
    this._schematicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schematicIdInput() {
    return this._schematicId;
  }

  // talos_version - computed: false, optional: false, required: true
  private _talosVersion?: string; 
  public get talosVersion() {
    return this.getStringAttribute('talos_version');
  }
  public set talosVersion(value: string) {
    this._talosVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get talosVersionInput() {
    return this._talosVersion;
  }

  // urls - computed: true, optional: false, required: false
  private _urls = new DataTalosImageFactoryUrlsUrlsOutputReference(this, "urls");
  public get urls() {
    return this._urls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architecture: cdktf.stringToTerraform(this._architecture),
      platform: cdktf.stringToTerraform(this._platform),
      sbc: cdktf.stringToTerraform(this._sbc),
      schematic_id: cdktf.stringToTerraform(this._schematicId),
      talos_version: cdktf.stringToTerraform(this._talosVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sbc: {
        value: cdktf.stringToHclTerraform(this._sbc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schematic_id: {
        value: cdktf.stringToHclTerraform(this._schematicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      talos_version: {
        value: cdktf.stringToHclTerraform(this._talosVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
